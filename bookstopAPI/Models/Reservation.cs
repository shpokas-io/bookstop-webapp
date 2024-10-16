//Public class for reservation 
public class Reservation
{
  public int Id {get;set;}
  public int BookId {get;set;}
  public string UserId {get;set;}
  public string BookType {get;set;}//Audio or Book
  public int Duration {get;set;} //number of days
  public bool QuickPickup {get;set;}
  public decimal TotalCost {get;set;}
}
