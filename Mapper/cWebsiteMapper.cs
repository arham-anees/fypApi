using BLL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mapper
{

    public class cWebsiteMapper : IEntityTypeConfiguration<cWebsite>
    {
        public void Configure(EntityTypeBuilder<cWebsite> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).HasMaxLength(200).IsRequired(false);
            builder.Property(p => p.Owner).IsRequired(true);
            builder.Property(p => p.Password).IsRequired(true);
            builder.Property(p => p.ServerIp).IsRequired(true);
            builder.Property(p => p.Username).IsRequired(true);
            builder.Property(p => p.CurrentVersion).IsRequired(true);
        }
    }
}
