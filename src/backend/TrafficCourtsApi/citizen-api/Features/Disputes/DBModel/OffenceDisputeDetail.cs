﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TrafficCourts.Common.Contract;

namespace Gov.CitizenApi.Features.Disputes.DBModel
{
    public class OffenceDisputeDetail
    {
        [Key]
        public int Id { get; set; }
        public int OffenceNumber { get; set; }
        public bool RequestReduction { get; set; }
        public bool? ReductionAppearInCourt { get; set; }
        public bool RequestMoreTime { get; set; }
        public string ReductionReason { get; set; }
        public string MoreTimeReason { get; set; }
        public DisputeStatus Status { get; set; }
        public string OffenceAgreementStatus { get; set; }

        [ForeignKey("Dispute")]
        public int DisputeId { get; set; }
        public Dispute Dispute { get; set; }
    }
}
