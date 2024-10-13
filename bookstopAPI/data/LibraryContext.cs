using bookstopAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace bookstopAPI.Data
{
  public class bookstop : DbContext
  {
    public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

    public DbSet<Book> Books { get;set; }
    public DbSet<Reservation> Reservations { get; set;}
  }
}