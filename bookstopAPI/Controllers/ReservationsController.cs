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
if(reservation ==null || reservation.Days <= 0 || string.IsNullOrWhiteSpace(reservation.UserId))
{
  return BadRequest("Invalid reservation details.");
}
    //Logic to calculate the total reservation cost
    var book = await _context.Books.FindAsync(reservation.BookId);
    if(book == null)
    {
      return NotFound("Book not found.");
    }

    //Calculate total cost based on days, type,quick pickup, etc.
    decimal dailyRate = reservation.IsAudiobook ? 3m : 2m;
    decimal totalCost = dailyRate * reservation.Days;
    if (reservation.Days > 3)
    {
      totalCost -= totalCost * 0.1m;
    }
    if(reservation.Days > 10)
    {
      totalCost -= totalCost * 0.2m;
    }
    totalCost += 3m; //This is service fee
    if(reservation.IsQuickPickUp)
    {
      totalCost += 5m; //Quick pickup fee
    }

    reservation.TotalCost = totalCost;
    _context.Reservations.Add(reservation);
    await _context.SaveChangesAsync();

    return CreatedAtAction("GetReservation", new { id = reservation.Id}, reservation);
 
  }

  //GET: api/Reservations
  [HttpGet]
  public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
  {
    return await _context.Reservations.ToListAsync();
  }

  //GET: api/Reservations/5
  [HttpGet("{id}")]
  public async Task<ActionResult<Reservation>> GetReservation(int id)
  {
    var reservation = await _context.Reservations.FindAsync(id);

    if(reservation == null)
    {
      return NotFound();

    }
    return reservation;
  }
}