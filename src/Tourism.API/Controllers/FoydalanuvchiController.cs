﻿using Azure.Core;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tourism.API.Dtos.FoydalanuvchiDto;
using Tourism.Application.UseCases.FoydalanuvchiUseCases.Commands;
using Tourism.Application.UseCases.FoydalanuvchiUseCases.Queries;
using Toursim.Domain.Entities;
using Toursim.Domain.Enums;

namespace Tourism.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FoydalanuvchiController : ControllerBase
    {
        private readonly IMediator mediator;

        public FoydalanuvchiController(IMediator _mediator)
        {
            mediator = _mediator;
        }
        //    [Authorize(Roles = "Admin")]

      //  [Authorize(Roles = "admin,foydalanuvchi")]
        [HttpPost]
        public async ValueTask<IActionResult> CreateFoydalanuvchiAsync(CreateFoydalanuvchiCommand command)
        {
            
            var result = await mediator.Send(command);
            return Ok(result);
        }
        //  [Authorize(Roles = "Admin")]

        //[Authorize(Roles = "admin")]
        [HttpGet]
        public async ValueTask<IActionResult> GetAllFoydalanuvchilarAsync()
        {
            return Ok(await mediator.Send(new GetAllFoydalanuvchiCommand()));
        }

        //[Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin")]
        [HttpGet]
        public async ValueTask<IActionResult> GetFoydalanuvchiByIdAsync(int id)
        {
            GetByIdFoydalanuvchiCommand command = new GetByIdFoydalanuvchiCommand { id = id };
            return Ok(await mediator.Send(command));
        }

        //[Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin,foydalanuvchi")]
        [HttpDelete]
        public async ValueTask<IActionResult> DeleteFoydalanuvchiById(int id)
        {
            DeleteFoydalanuvchiCommand command = new DeleteFoydalanuvchiCommand() { id = id };
            return Ok(await mediator.Send(command));
        }

        //[Authorize(Roles = "Admin")]
        [Authorize(Roles = "admin,foydalanuvchi")]
        [HttpPut]
        public async ValueTask<IActionResult> UpdateFoydalanuvchiById(UpdateFoydalanuvchiDto request, int id)
        {
            UpdateFoydalanuvchiCommand command = new UpdateFoydalanuvchiCommand()
            {
                ism = request.ism,
                condition = Condition.created,
                email = request.email,
                familiya = request.familiya,
                parol = request.parol,
                role = Role.foydalanuvchi,
                telNomer = request.telNomer,
                id = id,
            };
            return Ok(await mediator.Send(command));
        }
        [HttpPut]
        public async ValueTask<IActionResult> UpdateFoydalanuvchiByEmailIsm(UpdateByEmailNameCommand request)
        {
            Foydalanuvchi result = await mediator.Send(request);
            return Ok(result);
        }
    }
}
