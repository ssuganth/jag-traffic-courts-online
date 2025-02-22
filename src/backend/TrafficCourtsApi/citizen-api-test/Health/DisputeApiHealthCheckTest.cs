﻿using System.Diagnostics.CodeAnalysis;
using Gov.CitizenApi.Health;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Logging;
using Moq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Gov.CitizenApi.Test.Health
{
    [ExcludeFromCodeCoverage]
    public class CitizenApiHealthCheckTest
    {
        private CitizenApiHealthCheck _sut;
        private readonly Mock<ILogger<CitizenApiHealthCheck>> _apiServiceLogger = new Mock<ILogger<CitizenApiHealthCheck>>();

        public CitizenApiHealthCheckTest()
        {
            _sut = new CitizenApiHealthCheck(_apiServiceLogger.Object);
        }

        [Fact]
#pragma warning disable IDE1006 // Naming Styles
        public async Task return_health_service_for_dispute()
#pragma warning restore IDE1006 // Naming Styles
        {
            var result = await _sut.CheckHealthAsync(new HealthCheckContext(), CancellationToken.None);
            Assert.Equal(HealthStatus.Healthy, result.Status);
        }
    }
}
