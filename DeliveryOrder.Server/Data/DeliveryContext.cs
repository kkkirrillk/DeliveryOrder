using DeliveryOrder.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrder.Server.Data
{
    public class DeliveryContext : DbContext
    {
        public DeliveryContext(DbContextOptions<DeliveryContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
    }
}
