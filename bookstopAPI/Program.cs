using bookstopAPI.Data;
using bookstopAPI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

//Configure the in-memory database EFCORE
builder.Services.AddDbContext<LibraryContext>(options => options.UseInMemoryDatabase("LibraryDB"));

var app = builder.Build();

//Seed data into the in-memory database
using(var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<LibraryContext>();
    SeedData(context);
}

void SeedData(LibraryContext context)
{
    //check if the db already contains any books to avoid seeding again
    if(!context.Books.Any())
    {
        context.Books.AddRange(new List<Book>
        {
            new Book { Id = 1, Name = "Harry Potter and the Sorcerer's Stone", Year = 1997, Type = "Book", PictureUrl= "https://covers.openlibrary.org/b/id/7984916-L.jpg" },
            new Book { Id = 2, Name = "Harry Potter and the Chamber of Secrets", Year = 1998, Type = "Book", PictureUrl= "https://covers.openlibrary.org/b/id/7984919-L.jpg" },
            new Book { Id = 3, Name = "The Lord of the Rings: The Fellowship of the Ring", Year = 1954, Type = "Book", PictureUrl= "https://covers.openlibrary.org/b/id/6202464-L.jpg" },
            new Book { Id = 4, Name = "The Lord of the Rings: The Two Towers", Year = 1954, Type = "Audiobook", PictureUrl= "https://covers.openlibrary.org/b/id/6202465-L.jpg" }
        });
        context.SaveChanges(); //Saves changes to the database

    }
}



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    
}

app.UseAuthorization();
app.UseHttpsRedirection();

//Map API COntrollers
app.MapControllers();


app.Run();
