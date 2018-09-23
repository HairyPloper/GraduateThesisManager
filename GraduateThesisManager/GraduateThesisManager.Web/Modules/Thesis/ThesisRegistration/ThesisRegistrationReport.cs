using GraduateThesisManager.Thesis.Entities;

namespace  GraduateThesisManager.Thesis.Entities
{
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Thesis.ThesisRegistration")]
    [ReportDesign(MVC.Views.Thesis.ThesisRegistration.ThesisRegistrationReport)]
    public class ThesisRegistrationReport : IReport, ICustomizeHtmlToPdf
    {
        public Int32 ThesisRegistrationId { get; set; }

        public object GetData()
        {
            var data = new ThesisRegistrationReportData();

            using (var connection = SqlConnections.NewFor<ThesisRegistrationRow>())
            {
                var o = ThesisRegistrationRow.Fields;
                data.ThesisRegistration = connection.TryById<ThesisRegistrationRow>(this.ThesisRegistrationId, q =>
                    q.SelectTableFields().Select(o.ModuleName, o.CourseName, o.ThesisThesisName, o.LecturerName,
                        o.Status1, o.UserDisplayName, o.Id, o.CreateDate, o.ExpireDate)) ?? new ThesisRegistrationRow();
            }
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            options.MarginTop = "2cm";
        }
    }

    public class ThesisRegistrationReportData
    {
        public ThesisRegistrationRow ThesisRegistration { get; set; }
    }
}