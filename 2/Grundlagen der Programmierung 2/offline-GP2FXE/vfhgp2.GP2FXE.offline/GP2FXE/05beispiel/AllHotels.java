package model;
/**
 * This class gives a list of hotels
 * mainly for testing purposes.
 * @author agathe merceron
 */

import java.util.ArrayList;

public class AllHotels {
	
	public static ArrayList<Hotel> getDefaultList(){
		ArrayList<Hotel> hotels = new ArrayList<>();
		hotels.add(Hotel.getDefaultHotel());
		//I am lazy; of course here create different hotels
		hotels.add(Hotel.getDefaultHotel());
		return hotels;
		
	}
	
	public static void main(String[] args) {
		ArrayList<Hotel> ibises = AllHotels.getDefaultList();
		System.out.println(ibises);
	}
}