using System.ComponentModel.DataAnnotations;

public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string PhotoFileName { get; set; }
        public DateTime DOJ { get; set; }
    }