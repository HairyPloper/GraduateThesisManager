
namespace GraduateThesisManager.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("admin")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("serenity"), Required(true)]
        public string Password { get; set; }
    }
}