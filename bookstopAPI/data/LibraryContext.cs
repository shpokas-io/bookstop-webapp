using bookstopAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace bookstopAPI.Data
{
  public class LibraryContext : DbContext
  {
    public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

    public DbSet<Book> Books { get;set; }
    public DbSet<Reservation> Reservations { get; set;}

    protected override void OnModelCreating (ModelBuilder modelBuilder)
    {
      //Books
      modelBuilder.Entity<Book>().HasData(
        new Book { Id = 1, Name = "Harry Potter and the Sorcerer's Stone", Year = 1997, Type = "Book", PictureUrl= " URL "},
        new Book { Id = 2, Name = "Harry Potter and the Sorcerer's Stone", Year = 1997, Type = "Audiobook", PictureUrl= " URL "},
        new Book { Id = 3, Name = "Harry Potter and the Chamber of Secrets", Year = 1998, Type = "Book", PictureUrl= " URL "},
        new Book { Id = 4, Name = "Harry Potter and the Chamber of Secrets", Year = 1998, Type = "Audiobook", PictureUrl= " URL "}
      );
    }
  }
}