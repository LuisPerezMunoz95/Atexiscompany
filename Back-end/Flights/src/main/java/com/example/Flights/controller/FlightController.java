package com.example.Flights.controller;

import com.example.Flights.model.Flight;
import com.example.Flights.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight")
public class FlightController {
    @Autowired
    private FlightService flightService;
    @GetMapping()
    public List<Flight> getFlight() { return flightService.findAll();}
    @GetMapping("/{id}")
    public Flight findById(@PathVariable String id) { return flightService.findById(id).get();}
    @PostMapping()
    public void save(@RequestBody Flight flight) { flightService.save(flight);}
    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody Flight flight) { flightService.save(flight);}
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){ flightService.deleteById(id);}
}
