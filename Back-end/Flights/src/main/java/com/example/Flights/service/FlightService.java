package com.example.Flights.service;

import com.example.Flights.model.Flight;
import com.example.Flights.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
    @Autowired
    FlightRepository flightRepository;

    public void save (Flight flight) {flightRepository.save(flight);}

    public List<Flight> findAll(){ return flightRepository.findAll();}

    public Optional<Flight> findById(String id) { return flightRepository.findById(id);}

    public void deleteById(String id) { flightRepository.deleteById(id);}
}
