using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager) {
            if(!userManager.Users.Any()) {
                var user = new AppUser
                {
                    DisplayName = "Liny",
                    Email = "liny@test.com",
                    UserName = "liny@test.com",
                    Address = new Address
                    {
                        FirstName = "Liny",
                        LastName = "Thomas",
                        Street = "Kaniankunnu",
                        City = "Aluva",
                        State = "Kerala",
                        ZipCode = "683102"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}