using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task CacheResponseAsync(string cacheKey,object Response,TimeSpan timeToLive);
        Task<string> GetcachedResponseAsync(string cachekey);

    }
}