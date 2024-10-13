using bookstopAPI.Data;
using bookstopAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
  private readonly LibraryContext _context;

  public BooksController(LibraryContext context)
  {
    _context = context;
  }

  //GET api/books
  [HttpGet]
  public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
  {
    var books = await _context.Books.ToListAsync();
    return Ok(books); //Ensure HTTP 200 response with data
  }

  //GET api/Books/search
  [HttpGet("search")]
  public async Task<ActionResult<IEnumerable<Book>>> SearchBooks(string? name, int? year, string? type)
  {
    var query = _context.Books.AsQueryable();

//FIlter types
    if (!string.IsNullOrEmpty(name))
    {
      query = query.Where(b => b.Name.Contains(name));
    }

    //Filter by year (if provided)
    if(year.HasValue)
    {
      query = query.Where(b => b.Year == year.Value);
    }

    //Further by "type" (Book/AudioBook)
    if(!string.IsNullOrEmpty(type))
    {
      query = query.Where(b => b.Type.Equals(type, StringComparison.OrdinalIgnoreCase));
    }

    var result = await query.ToListAsync();
    if(!result.Any())
    {
      return NotFound("No books match the search criteria");
    }

    return Ok(result)
    return await query.ToListAsync();
  }
}