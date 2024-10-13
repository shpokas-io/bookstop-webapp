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
    //LOgic to calculate the total reservation cost
  }
}