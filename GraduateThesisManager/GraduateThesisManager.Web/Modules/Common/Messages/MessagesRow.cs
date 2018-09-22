
namespace GraduateThesisManager.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("Common"), TableName("[dbo].[Messages]")]
    [DisplayName("Messages"), InstanceName("Messages")]
    [ReadPermission(CommonPermissionKeys.Messages.Read)]
    [InsertPermission(CommonPermissionKeys.Messages.Insert)]
    [UpdatePermission(CommonPermissionKeys.Messages.Update)]
    [DeletePermission(CommonPermissionKeys.Messages.Delete)]
    public sealed class MessagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, Updatable(false)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Message Sent On"), NotNull, Updatable(false), DisplayFormat("G"), DateTimeFiltering(DisplayFormat = "G")]
        public DateTime? SendDate
        {
            get { return Fields.SendDate[this]; }
            set { Fields.SendDate[this] = value; }
        }

        [DisplayName("Message Read On"), DisplayFormat("G"), DateTimeFiltering(DisplayFormat = "G")]
        public DateTime? ReadDate
        {
            get { return Fields.ReadDate[this]; }
            set { Fields.ReadDate[this] = value; }
        }

        [DisplayName("From user"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdFrom"), TextualField("IdFromUsername"), Updatable(false)]
        public Int32? IdFrom
        {
            get { return Fields.IdFrom[this]; }
            set { Fields.IdFrom[this] = value; }
        }

        [DisplayName("To user"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdTo"), TextualField("IdToUsername"), Updatable(false)]
        public Int32? IdTo
        {
            get { return Fields.IdTo[this]; }
            set { Fields.IdTo[this] = value; }
        }

        [DisplayName("Message"), Size(1000), NotNull, QuickSearch, HtmlContentEditor(Cols=1,Rows=15), Updatable(false)]
        public String Message
        {
            get { return Fields.Message[this]; }
            set { Fields.Message[this] = value; }
        }

        [DisplayName("Subject"), Size(100), NotNull, Updatable(false)]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Important"), NotNull]
        public Boolean? IsImportant
        {
            get { return Fields.IsImportant[this]; }
            set { Fields.IsImportant[this] = value; }
        }

        [DisplayName("Checked"), NotNull]
        public Boolean? IsChecked
        {
            get { return Fields.IsChecked[this]; }
            set { Fields.IsChecked[this] = value; }
        }

        [DisplayName("From user"), Expression("jIdFrom.[Username]")]
        public String IdFromUsername
        {
            get { return Fields.IdFromUsername[this]; }
            set { Fields.IdFromUsername[this] = value; }
        }

        [DisplayName("Id From Display Name"), Expression("jIdFrom.[DisplayName]")]
        public String IdFromDisplayName
        {
            get { return Fields.IdFromDisplayName[this]; }
            set { Fields.IdFromDisplayName[this] = value; }
        }

        [DisplayName("Id From Email"), Expression("jIdFrom.[Email]")]
        public String IdFromEmail
        {
            get { return Fields.IdFromEmail[this]; }
            set { Fields.IdFromEmail[this] = value; }
        }

        [DisplayName("Id From Source"), Expression("jIdFrom.[Source]")]
        public String IdFromSource
        {
            get { return Fields.IdFromSource[this]; }
            set { Fields.IdFromSource[this] = value; }
        }

        [DisplayName("Id From Password Hash"), Expression("jIdFrom.[PasswordHash]")]
        public String IdFromPasswordHash
        {
            get { return Fields.IdFromPasswordHash[this]; }
            set { Fields.IdFromPasswordHash[this] = value; }
        }

        [DisplayName("Id From Password Salt"), Expression("jIdFrom.[PasswordSalt]")]
        public String IdFromPasswordSalt
        {
            get { return Fields.IdFromPasswordSalt[this]; }
            set { Fields.IdFromPasswordSalt[this] = value; }
        }

        [DisplayName("Id From Last Directory Update"), Expression("jIdFrom.[LastDirectoryUpdate]")]
        public DateTime? IdFromLastDirectoryUpdate
        {
            get { return Fields.IdFromLastDirectoryUpdate[this]; }
            set { Fields.IdFromLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id From User Image"), Expression("jIdFrom.[UserImage]")]
        public String IdFromUserImage
        {
            get { return Fields.IdFromUserImage[this]; }
            set { Fields.IdFromUserImage[this] = value; }
        }

        [DisplayName("Id From Insert Date"), Expression("jIdFrom.[InsertDate]")]
        public DateTime? IdFromInsertDate
        {
            get { return Fields.IdFromInsertDate[this]; }
            set { Fields.IdFromInsertDate[this] = value; }
        }

        [DisplayName("Id From Insert User Id"), Expression("jIdFrom.[InsertUserId]")]
        public Int32? IdFromInsertUserId
        {
            get { return Fields.IdFromInsertUserId[this]; }
            set { Fields.IdFromInsertUserId[this] = value; }
        }

        [DisplayName("Id From Update Date"), Expression("jIdFrom.[UpdateDate]")]
        public DateTime? IdFromUpdateDate
        {
            get { return Fields.IdFromUpdateDate[this]; }
            set { Fields.IdFromUpdateDate[this] = value; }
        }

        [DisplayName("Id From Update User Id"), Expression("jIdFrom.[UpdateUserId]")]
        public Int32? IdFromUpdateUserId
        {
            get { return Fields.IdFromUpdateUserId[this]; }
            set { Fields.IdFromUpdateUserId[this] = value; }
        }

        [DisplayName("Id From Is Active"), Expression("jIdFrom.[IsActive]")]
        public Int16? IdFromIsActive
        {
            get { return Fields.IdFromIsActive[this]; }
            set { Fields.IdFromIsActive[this] = value; }
        }

        [DisplayName("Id To Username"), Expression("jIdTo.[Username]")]
        public String IdToUsername
        {
            get { return Fields.IdToUsername[this]; }
            set { Fields.IdToUsername[this] = value; }
        }

        [DisplayName("Id To Display Name"), Expression("jIdTo.[DisplayName]")]
        public String IdToDisplayName
        {
            get { return Fields.IdToDisplayName[this]; }
            set { Fields.IdToDisplayName[this] = value; }
        }

        [DisplayName("Id To Email"), Expression("jIdTo.[Email]")]
        public String IdToEmail
        {
            get { return Fields.IdToEmail[this]; }
            set { Fields.IdToEmail[this] = value; }
        }

        [DisplayName("Id To Source"), Expression("jIdTo.[Source]")]
        public String IdToSource
        {
            get { return Fields.IdToSource[this]; }
            set { Fields.IdToSource[this] = value; }
        }

        [DisplayName("Id To Password Hash"), Expression("jIdTo.[PasswordHash]")]
        public String IdToPasswordHash
        {
            get { return Fields.IdToPasswordHash[this]; }
            set { Fields.IdToPasswordHash[this] = value; }
        }

        [DisplayName("Id To Password Salt"), Expression("jIdTo.[PasswordSalt]")]
        public String IdToPasswordSalt
        {
            get { return Fields.IdToPasswordSalt[this]; }
            set { Fields.IdToPasswordSalt[this] = value; }
        }

        [DisplayName("Id To Last Directory Update"), Expression("jIdTo.[LastDirectoryUpdate]")]
        public DateTime? IdToLastDirectoryUpdate
        {
            get { return Fields.IdToLastDirectoryUpdate[this]; }
            set { Fields.IdToLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id To User Image"), Expression("jIdTo.[UserImage]")]
        public String IdToUserImage
        {
            get { return Fields.IdToUserImage[this]; }
            set { Fields.IdToUserImage[this] = value; }
        }

        [DisplayName("Id To Insert Date"), Expression("jIdTo.[InsertDate]")]
        public DateTime? IdToInsertDate
        {
            get { return Fields.IdToInsertDate[this]; }
            set { Fields.IdToInsertDate[this] = value; }
        }

        [DisplayName("Id To Insert User Id"), Expression("jIdTo.[InsertUserId]")]
        public Int32? IdToInsertUserId
        {
            get { return Fields.IdToInsertUserId[this]; }
            set { Fields.IdToInsertUserId[this] = value; }
        }

        [DisplayName("Id To Update Date"), Expression("jIdTo.[UpdateDate]")]
        public DateTime? IdToUpdateDate
        {
            get { return Fields.IdToUpdateDate[this]; }
            set { Fields.IdToUpdateDate[this] = value; }
        }

        [DisplayName("Id To Update User Id"), Expression("jIdTo.[UpdateUserId]")]
        public Int32? IdToUpdateUserId
        {
            get { return Fields.IdToUpdateUserId[this]; }
            set { Fields.IdToUpdateUserId[this] = value; }
        }

        [DisplayName("Id To Is Active"), Expression("jIdTo.[IsActive]")]
        public Int16? IdToIsActive
        {
            get { return Fields.IdToIsActive[this]; }
            set { Fields.IdToIsActive[this] = value; }
        }
        [DisplayName("Direction"),NotMapped,Ignore]
        public String SentReacived
        {
            get { return Fields.SentReacived[this]; }
            set { Fields.SentReacived[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Subject; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MessagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField SendDate;
            public DateTimeField ReadDate;
            public Int32Field IdFrom;
            public Int32Field IdTo;
            public StringField Message;
            public StringField Subject;
            public BooleanField IsImportant;
            public BooleanField IsChecked;
            public StringField SentReacived;

            public StringField IdFromUsername;
            public StringField IdFromDisplayName;
            public StringField IdFromEmail;
            public StringField IdFromSource;
            public StringField IdFromPasswordHash;
            public StringField IdFromPasswordSalt;
            public DateTimeField IdFromLastDirectoryUpdate;
            public StringField IdFromUserImage;
            public DateTimeField IdFromInsertDate;
            public Int32Field IdFromInsertUserId;
            public DateTimeField IdFromUpdateDate;
            public Int32Field IdFromUpdateUserId;
            public Int16Field IdFromIsActive;

            public StringField IdToUsername;
            public StringField IdToDisplayName;
            public StringField IdToEmail;
            public StringField IdToSource;
            public StringField IdToPasswordHash;
            public StringField IdToPasswordSalt;
            public DateTimeField IdToLastDirectoryUpdate;
            public StringField IdToUserImage;
            public DateTimeField IdToInsertDate;
            public Int32Field IdToInsertUserId;
            public DateTimeField IdToUpdateDate;
            public Int32Field IdToUpdateUserId;
            public Int16Field IdToIsActive;
        }
    }
}
