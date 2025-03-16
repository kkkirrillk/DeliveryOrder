using DeliveryOrder.Server.Data;
using DeliveryOrder.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrder.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly DeliveryContext _context;

        public OrdersController(DeliveryContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            return order;
        }

        // POST: api/Orders
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            // Генерируем номер заказа
            order.OrderNumber = $"ORD-{Guid.NewGuid().ToString().Substring(0, 8).ToUpper()}";

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Возвращаем созданный ресурс
            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }
    }
}
