using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification:BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification()
        {
            addInclude(x=>x.ProductType);
            addInclude(x=>x.ProductBrand);
        }

        public ProductsWithTypesAndBrandsSpecification(int id ): base(x=>x.Id==id)
        {
            addInclude(x => x.ProductType);
            addInclude(x => x.ProductBrand);
        }
    }
}