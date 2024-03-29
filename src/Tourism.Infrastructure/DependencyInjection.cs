﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Tourism.Application.Abstraction;

namespace Tourism.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services , IConfiguration configuration)
        {
            //var dbHost = Environment.GetEnvironmentVariable("DB_HOST");
            //var dbName = Environment.GetEnvironmentVariable("DB_NAME");
            //var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD");
            //var connectionsString = $"Data Source={dbHost};Initial Catalog={dbName};User ID=sa;Password={dbPassword};Encrypt=False;Connection Timeout=120";

            //   string connectionsString = "Server=DESKTOP-HUHB6EP;Database=TouristDb;Trusted_Connection=True;TrustServerCertificate=True;";
            services.AddDbContext<ITourismDbContext, TourismDbContext>(options =>
             {
                 options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"), providerOptions => providerOptions.EnableRetryOnFailure());
             });
            //services.AddDbContext<ITourismDbContext, TourismDbContext>(options =>
            //{
            //    options.UseSqlServer(connectionsString, providerOptions => providerOptions.EnableRetryOnFailure());
            //});
            return services;
        }
    }
}