//Public class for reservation 

public class reservation
{
  public int Id {get;set;}
  public int BookId {get;set;}
  public string UserId {get;set;}
  public int Days {get;set;}
  public bool IsQuickPickUp {get;set;}
  public DateTime ReservationDate {get;set;}
}