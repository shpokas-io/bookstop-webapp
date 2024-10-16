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

//Enable CORS FOR SYNCING WITH FRONT END
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontendApp",
    builder => 
    {
        builder.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});


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
            new Book { Id = 1, Name = "Harry Potter and the Sorcerer's Stone", Year = 1997, Type = "Book", PictureUrl= "https://m.media-amazon.com/images/I/91wKDODkgWL._SY466_.jpg" },
            new Book { Id = 2, Name = "Harry Potter and the Chamber of Secrets", Year = 1998, Type = "Book", PictureUrl= "https://m.media-amazon.com/images/I/918wxhKJaPL._SY466_.jpg" },
            new Book { Id = 3, Name = "The Lord of the Rings: The Fellowship of the Ring", Year = 1954, Type = "Book", PictureUrl= "https://m.media-amazon.com/images/I/41qCdBemr9L._SY445_SX342_.jpg" },
            new Book { Id = 4, Name = "The Lord of the Rings: The Two Towers", Year = 1954, Type = "Audiobook", PictureUrl= "https://m.media-amazon.com/images/I/41Lr-35uz8L._SY445_SX342_.jpg" }
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

app.UseCors("AllowFrontendApp");

app.UseAuthorization();
app.UseHttpsRedirection();

//Map API COntrollers
app.MapControllers();


app.Run();
