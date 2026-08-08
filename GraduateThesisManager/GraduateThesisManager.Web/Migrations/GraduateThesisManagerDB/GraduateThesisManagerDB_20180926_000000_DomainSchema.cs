using FluentMigrator;

namespace GraduateThesisManager.Migrations.GraduateThesisManagerDB
{
    [Migration(20180926000000)]
    public class GraduateThesisManagerDB_20180926_000000_DomainSchema : Migration
    {
        public override void Up()
        {
            Create.Table("Courses")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("CourseName").AsString(50).NotNullable()
                .WithColumn("CourseDescription").AsString(50).NotNullable()
                .WithColumn("Lecturer").AsInt32().NotNullable().ForeignKey("Users", "UserId")
                .WithColumn("Year").AsInt16().NotNullable()
                .WithColumn("Semester").AsInt16().NotNullable();

            Create.Table("Modules")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("Description").AsString(50).NotNullable()
                .WithColumn("HeadOfDepartment").AsInt32().NotNullable().ForeignKey("Users", "UserId");

            Create.Table("Modules_Courses")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("ModuleId").AsInt32().NotNullable().ForeignKey("Modules", "Id")
                .WithColumn("CourseId").AsInt32().NotNullable().ForeignKey("Courses", "Id");

            Create.Index("UX_Modules_Courses_ModuleId_CourseId")
                .OnTable("Modules_Courses")
                .OnColumn("ModuleId").Ascending()
                .OnColumn("CourseId").Ascending()
                .WithOptions().Unique();

            Create.Table("ThesisPool")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("ThesisName").AsString(50).NotNullable()
                .WithColumn("ThesisDescription").AsString(100).Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("ExpireDate").AsDateTime().Nullable()
                .WithColumn("CorseId").AsInt32().NotNullable().ForeignKey("Courses", "Id")
                .WithColumn("ThesisDocument").AsString(4000).Nullable();

            Create.Table("RegistrationStatus")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Status").AsString(50).NotNullable();

            Create.Index("UX_RegistrationStatus_Status")
                .OnTable("RegistrationStatus")
                .OnColumn("Status").Ascending()
                .WithOptions().Unique();

            Insert.IntoTable("RegistrationStatus").Row(new { Status = "In Progress" });
            Insert.IntoTable("RegistrationStatus").Row(new { Status = "Successful" });
            Insert.IntoTable("RegistrationStatus").Row(new { Status = "Rejected" });

            Create.Table("ThesisRegistration")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("User").AsInt32().NotNullable().ForeignKey("Users", "UserId")
                .WithColumn("Thesis").AsInt32().NotNullable().ForeignKey("ThesisPool", "Id")
                .WithColumn("Status").AsInt32().NotNullable().ForeignKey("RegistrationStatus", "Id")
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("ExpireDate").AsDateTime().NotNullable();

            Create.Index("UX_ThesisRegistration_User_Thesis")
                .OnTable("ThesisRegistration")
                .OnColumn("User").Ascending()
                .OnColumn("Thesis").Ascending()
                .WithOptions().Unique();

            Create.Table("Messages")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("SendDate").AsDateTime().NotNullable()
                .WithColumn("ReadDate").AsDateTime().Nullable()
                .WithColumn("IdFrom").AsInt32().NotNullable().ForeignKey("Users", "UserId")
                .WithColumn("IdTo").AsInt32().NotNullable().ForeignKey("Users", "UserId")
                .WithColumn("Message").AsString(1000).NotNullable()
                .WithColumn("Subject").AsString(100).NotNullable()
                .WithColumn("IsImportant").AsBoolean().NotNullable().WithDefaultValue(false)
                .WithColumn("IsChecked").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Index("IX_Messages_IdFrom_SendDate")
                .OnTable("Messages")
                .OnColumn("IdFrom").Ascending()
                .OnColumn("SendDate").Descending();

            Create.Index("IX_Messages_IdTo_SendDate")
                .OnTable("Messages")
                .OnColumn("IdTo").Ascending()
                .OnColumn("SendDate").Descending();
        }

        public override void Down()
        {
            Delete.Table("Messages");
            Delete.Table("ThesisRegistration");
            Delete.Table("RegistrationStatus");
            Delete.Table("ThesisPool");
            Delete.Table("Modules_Courses");
            Delete.Table("Modules");
            Delete.Table("Courses");
        }
    }
}
