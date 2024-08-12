using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CustomerBasket
    {
        public CustomerBasket()
        {
        }

        public CustomerBasket(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<BasketItems> Items { get; set; } = new List<BasketItems>();
        public int? deliveryMethodId { get; set; }
        public string clientSecret { get; set; }
        public string paymentIntentId { get; set; }
        public decimal ShippingPrice { get; set; }
        
    }


}