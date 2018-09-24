using GraduateThesisManager.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;


namespace GraduateThesisManager.ModuleCourses
{
    [LookupScript("ModuleCourses.ProfesorsLookUp")]
    public class ProfesorsLookUp: RowLookupScript<UserRow>
    {
        public ProfesorsLookUp()
        {
           TextField = "DisplayName";
            IdField = "UserId";
        }

        /// <summary>
        /// Prepares the query.
        /// </summary>
        /// <param name="query">The query.</param>
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = UserRow.Fields;
            var userRole = UserRoleRow.Fields;
            var role = RoleRow.Fields;
            query.Distinct(true)
                .Select(fld.DisplayName, fld.UserId)
                .LeftJoin("UserRoles", new Alias("userRole"), new Criteria("userRole.[UserId]=T0.[UserId]"))
                .LeftJoin("Roles", new Alias("role"), new Criteria("role.[RoleId]=userRole.[RoleId]"))
                .Where(
                    new Criteria("role.[RoleName]=N'Profesor'"));
        }

        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}