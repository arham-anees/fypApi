using System;
using System.Collections.Generic;
using System.Text;
using BLL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mapper
{
    public class cFileMapper : IEntityTypeConfiguration<cFiles>
    {
        public void configure(EntityTypeBuilder<cFiles> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).IsRequired(false);
            builder.Property(p => p.Website).IsRequired(true);
            builder.Property(p => p.UploadData).IsRequired(true);
            builder.Property(p => p.Version).IsRequired(true);
            builder.Property(p => p.Type).IsRequired(true);
            builder.Property(p => p.LastModified).IsRequired(true);
            builder.Property(p => p.IsActive).IsRequired(true);
        }

        public void Configure(EntityTypeBuilder<cFiles> builder)
        {
            throw new NotImplementedException();
        }
    }
}
