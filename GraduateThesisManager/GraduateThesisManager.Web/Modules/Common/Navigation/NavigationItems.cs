using Serenity.Navigation;
using Administration = GraduateThesisManager.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(2000, "Messages", typeof(GraduateThesisManager.Common.Pages.MessagesController), icon: "fa-address-book")]

[assembly: NavigationLink(3000, "Thesis/Thesis Pool", typeof(GraduateThesisManager.Thesis.Pages.ThesisPoolController), icon: null)]
[assembly: NavigationLink(3100, "Thesis/Thesis Registration", typeof(GraduateThesisManager.Thesis.Pages.ThesisRegistrationController), icon: null)]

[assembly: NavigationLink(4000, "ModuleCourses/Courses", typeof(GraduateThesisManager.ModuleCourses.Pages.CoursesController), icon: null)]
[assembly: NavigationLink(4100, "ModuleCourses/Modules", typeof(GraduateThesisManager.ModuleCourses.Pages.ModulesController), icon: null)]
[assembly: NavigationLink(4200, "ModuleCourses/Modules Courses", typeof(GraduateThesisManager.ModuleCourses.Pages.ModulesCoursesController), icon: null)]

[assembly: NavigationLink(5000, "Common/Registration Status", typeof(GraduateThesisManager.Common.Pages.RegistrationStatusController), icon: null)]

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: GraduateThesisManager.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
