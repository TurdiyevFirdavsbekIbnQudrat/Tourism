﻿using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tourism.API.Addictional.RasmUchun;
using Tourism.API.Dtos.TolovDto;
using Tourism.Application.UseCases.TolovUseCases.Commands;
using Tourism.Application.UseCases.TolovUseCases.Queries;

namespace Tourism.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TolovController : ControllerBase
    {
        private readonly IMediator mediator;

        public TolovController(IMediator _mediator)
        {
            mediator = _mediator;
        }
        //    [Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin,foydalanuvchi")]
        [HttpPost]
        public async ValueTask<IActionResult> CreateTolovAsync(CreateTolovCommand command)
        {
            var result = await mediator.Send(command);
            return Ok(result);
        }
        //  [Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin")]
        [HttpGet]
        public async ValueTask<IActionResult> GetAllTolovAsync()
        {
            return Ok(await mediator.Send(new GetAllTolovCommand()));
        }

        //[Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin")]
        [HttpGet]
        public async ValueTask<IActionResult> GetTolovByIdAsync(int id)
        {
            GetByIdTolovCommand command = new GetByIdTolovCommand { id = id };
            return Ok(await mediator.Send(command));
        }

        //[Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin")]
        [HttpDelete]
        public async ValueTask<IActionResult> DeleteTolovById(int id)
        {
            DeleteTolovCommand command = new DeleteTolovCommand() { id = id };
            return Ok(await mediator.Send(command));
        }

        //[Authorize(Roles = "Admin")]

        [Authorize(Roles = "admin")]
        [HttpPut]
        public async ValueTask<IActionResult> UpdateXizmatlarById(UpdateTolovDto request, int id)
        {
            UpdateTolovCommand command = new UpdateTolovCommand()
            {
                foydalanuvchiId = request.foydalanuvchiId,
                tolovQiymati = request.tolovQiymati,
                id = id,
            };
            return Ok(await mediator.Send(command));
        }
    }
}
