//
//  ViewController.swift
//  Camera
//
//  Created by Jonathan Poltak Samosir on 28/09/2014.
//  Copyright (c) 2014 Jonathan Poltak Samosir. All rights reserved.
//

import UIKit
import AVFoundation

class ViewController: UIViewController {
  
  let captureSession = AVCaptureSession()
  
  // If we find a device we'll store it here for later use
  var captureDevice : AVCaptureDevice?

  override func viewDidLoad() {
    super.viewDidLoad()
    
    // Do any additional setup after loading the view, typically from a nib
    self.captureSession.sessionPreset = AVCaptureSessionPresetHigh
    
    let devices = AVCaptureDevice.devices()
    
    // Loop through all devices on this device
    for device in devices {
      
      // Make sure particular device support video
      if (device.hasMediaType(AVMediaTypeVideo)) {
        
        // Check position and confirm we've got back camera
        if (device.position == AVCaptureDevicePosition.Back) {
          captureDevice = device as? AVCaptureDevice
          break
        }
      }
    }
    
    if captureDevice != nil {
      beginSession()
    }
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }

  func beginSession() {
    var err : NSError? = nil
    captureSession.addInput(AVCaptureDeviceInput(device: captureDevice, error: &err))
    
    if err != nil {
      println("error: \(err?.localizedDescription)")
    }
    
    let previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
    self.view.layer.addSublayer(previewLayer)
    previewLayer.frame = self.view.layer.frame
    captureSession.startRunning()
  }
  
  func focusTo(value : Float) {
    // Check if device exists
    if let device = captureDevice {
      
      // Try to lock device
      if device.lockForConfiguration(nil) {
        
        // Focus to the given "value" and ignore callback
        device.setFocusModeLockedWithLensPosition(value, completionHandler: { (time) -> Void in })
        
        device.unlockForConfiguration()
      }
    }
  }
  
  let screenWidth = UIScreen.mainScreen().bounds.size.width
  override func touchesBegan(touches: NSSet, withEvent event: UIEvent) {
    var anyTouch = touches.anyObject() as UITouch
    var touchPercent = anyTouch.locationInView(self.view).x / screenWidth
    focusTo(Float(touchPercent))
  }
  
  override func touchesMoved(touches: NSSet, withEvent event: UIEvent) {
    var anyTouch = touches.anyObject() as UITouch
    var touchPercent = anyTouch.locationInView(self.view).x / screenWidth
    focusTo(Float(touchPercent))
  }

}

