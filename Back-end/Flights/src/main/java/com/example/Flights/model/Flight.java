package com.example.Flights.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Arrays;

public class Flight {
    @Id
    private String id;
    @Field
    //private String originsList [] = {"Paris", "Barcelona", "London", "Munich", "Miami", "Madrid"};
    private String originsList;
    @Field
    //private String destinationsList [] ={"Paris", "Barcelona", "London", "Munich", "Miami", "Madrid"};
    private String destinationsList;
    @Field
    //private String airLines [] = {"Iberia", "BritshAirWays", "AirEuropa"};
    private String airLines;
    @Field
    //private String tripSelected [] = {"One-Way", "Round-trip"};
    private String tripSelected;
    @Field
    private boolean layOver;
    @Field
    private int passengersNumber;
    @Field
    private String timeDate;
    @Field
    private String dayDate;

    public Flight(){}

    public Flight(String id, String destinationsList, String originsList, String airLines, String tripSelected, boolean layOver, int passengersNumber, String timeDate, String dayDate) {
        this.id = id;
        this.destinationsList = destinationsList;
        this.originsList = originsList;
        this.airLines = airLines;
        this.tripSelected = tripSelected;
        this.layOver = layOver;
        this.passengersNumber = passengersNumber;
        this.timeDate = timeDate;
        this.dayDate = dayDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDestinationsList() {
        return destinationsList;
    }

    public void setDestinationsList(String destinationsList) {
        this.destinationsList = destinationsList;
    }

    public String getOriginsList() {
        return originsList;
    }

    public void setOriginsList(String originsList) {
        this.originsList = originsList;
    }

    public String getAirLines() {
        return airLines;
    }

    public void setAirLines(String airLines) {
        this.airLines = airLines;
    }

    public String getTripSelected() {
        return tripSelected;
    }

    public void setTripSelected(String tripSelected) {
        this.tripSelected = tripSelected;
    }

    public boolean isLayOver() {
        return layOver;
    }

    public void setLayOver(boolean layOver) {
        this.layOver = layOver;
    }

    public int getPassengersNumber() {
        return passengersNumber;
    }

    public void setPassengersNumber(int passengersNumber) {
        this.passengersNumber = passengersNumber;
    }

    public String getTimeDate() {
        return timeDate;
    }

    public void setTimeDate(String timeDate) {
        this.timeDate = timeDate;
    }

    public String getDayDate() {
        return dayDate;
    }

    public void setDayDate(String dayDate) {
        this.dayDate = dayDate;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "id='" + id + '\'' +
                ", destinationsList='" + destinationsList + '\'' +
                ", originsList='" + originsList + '\'' +
                ", airLines='" + airLines + '\'' +
                ", tripSelected='" + tripSelected + '\'' +
                ", layOver=" + layOver +
                ", passengersNumber=" + passengersNumber +
                ", timeDate='" + timeDate + '\'' +
                ", dayDate='" + dayDate + '\'' +
                '}';
    }
}
