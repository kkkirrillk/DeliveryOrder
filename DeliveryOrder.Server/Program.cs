using DeliveryOrder.Server.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 1. Подключаем DbContext
builder.Services.AddDbContext<DeliveryContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Добавляем контроллеры
builder.Services.AddControllers();

// 3. Swagger 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Настройки swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Добавляем маршрутизацию 
app.UseAuthorization();

app.MapControllers();

app.Run();
