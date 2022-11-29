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
    private boolean luggage;
    @Field
    private String timeDate;
    @Field
    private String dayDate;
    @Field
    private String transitTime;
    @Field
    private int price;
    @Field
    private int passengersNumber;

    public Flight(){}
    public String asda="";
    public Flight(String id, String originsList, String destinationsList, String airLines, String tripSelected, boolean layOver, boolean luggage, String timeDate, String dayDate, String transitTime, int price, int passengersNumber) {
        this.id = id;
        this.originsList = originsList;
        this.destinationsList = destinationsList;
        this.airLines = airLines;
        this.tripSelected = tripSelected;
        this.layOver = layOver;
        this.luggage = luggage;
        this.timeDate = timeDate;
        this.dayDate = dayDate;
        this.transitTime = transitTime;
        this.price = price;
        this.passengersNumber = passengersNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOriginsList() {
        return originsList;
    }

    public void setOriginsList(String originsList) {
        this.originsList = originsList;
    }

    public String getDestinationsList() {
        return destinationsList;
    }

    public void setDestinationsList(String destinationsList) {
        this.destinationsList = destinationsList;
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

    public boolean isLuggage() {
        return luggage;
    }

    public void setLuggage(boolean luggage) {
        this.luggage = luggage;
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

    public String getTransitTime() {
        return transitTime;
    }

    public void setTransitTime(String transitTime) {
        this.transitTime = transitTime;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPassengersNumber() {
        return passengersNumber;
    }

    public void setPassengersNumber(int passengersNumber) {
        this.passengersNumber = passengersNumber;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "id='" + id + '\'' +
                ", originsList='" + originsList + '\'' +
                ", destinationsList='" + destinationsList + '\'' +
                ", airLines='" + airLines + '\'' +
                ", tripSelected='" + tripSelected + '\'' +
                ", layOver=" + layOver +
                ", luggage=" + luggage +
                ", timeDate='" + timeDate + '\'' +
                ", dayDate='" + dayDate + '\'' +
                ", transitTime='" + transitTime + '\'' +
                ", price=" + price +
                ", passengersNumber=" + passengersNumber +
                '}';
    }
}
