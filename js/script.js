// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
// Function to calculate the volume of a sphere
function calculateVolume() {
  // Get the radius input value
  let r = parseFloat(document.getElementById("radius").value);

  // Check if input is valid
  if (isNaN(r) || r < 0) {
    document.getElementById("result").innerText = "Please enter a valid non-negative number.";
    return;
  }

  // Calculate volume using V = (4/3) * π * r^3
  let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  // Round to 2 decimal places
  volume = volume.toFixed(2);

  // Display the result
  document.getElementById("result").innerText = `Volume of the sphere: ${volume}`;
}