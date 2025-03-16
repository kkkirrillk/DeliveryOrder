using System;

namespace DeliveryOrder.Server.Models

{
    public class Order
    {
        public int Id { get; set; }                 // Первичный ключ
        public string SenderCity { get; set; }      // Город отправителя
        public string SenderAddress { get; set; }   // Адрес отправителя
        public string ReceiverCity { get; set; }    // Город получателя
        public string ReceiverAddress { get; set; } // Адрес получателя
        public double Weight { get; set; }          // Вес
        public DateTime PickupDate { get; set; }    // Дата забора груза
        public string OrderNumber { get; set; }     // Номер заказа
    }
}

