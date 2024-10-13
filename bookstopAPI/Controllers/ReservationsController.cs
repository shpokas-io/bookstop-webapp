using bookstopAPI.Data;
using bookstopAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ReservationsController : ControllerBase
{
  private readonly LibraryContext _context;

  public ReservationsController(LibraryContext context)
  {
    _context = context;
  }

  //Post api/Reservations
  [HttpPost]
  public async Task<ActionResult<Reservation>> CreateReservation(Reservation reservation)
  {
    //Logic to calculate the total reservation cost
    var book = await _context.Books.FindAsync(reservation.BookId);
    if(book == null)
    {
      return NotFound("Book not found.");
    }

    //Calculate total cost based on days, type,quick pickup, etc.
    decimal dailyRate = reservation.IsAudiobook ? 3 : 2;
    decimal totalCost = dailyRate * reservation.Days;
    if (reservation.Days > 3)
    {
      totalCost -= totalCost * 0.1;
    }
    if(reservation.Days > 10)
    {
      totalCost -= totalCost * 0.2;
    }
    totalCost += 3; //This is service fee
    if(reservation.IsQuickPickUp)
    {
      totalCost += 5; //Quick pickup fee
    }

    reservation.TotalCost = totalCost;
    _context.Reservations.Add(reservation);
    await _context.SaveChangesAsync();

    return CreatedAtAction("GetReservation", new { id = reservation.Id}, reservation);
 
  }
}