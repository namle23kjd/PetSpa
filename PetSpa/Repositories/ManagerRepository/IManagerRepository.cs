﻿using PetSpa.Models.Domain;

namespace PetSpa.Repositories.ManagerRepository
{
    public interface IManagerRepository
    {
        Task<List<Manager>> GetAllAsync();
        Task<Manager> GetByIDAsync(Guid ManaId);

        //Hàm update đúng nên để nguyên 
        Task<Manager?> UpdateAsync(Guid ManaId, Manager manager);
    }
}