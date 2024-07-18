using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethod, string BasketId, Address shippingAddress);
        Task<IReadOnlyList<Order>> GetOrderForUserAsync(string buyerEmail);
        Task<Order> GetOrderByIdAsync(int Id, string buyerEmail);
        Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync();
    }
}
