using System;
using System.Collections.Generic;
using System.Text;
using BLL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mapper {
	public class cUserMapper :IEntityTypeConfiguration<cUser> {
		public void Configure(EntityTypeBuilder<cUser> builder)
		{
			builder.Property(p => p.FirstName).HasMaxLength(200).IsRequired(false);
			builder.Property(p => p.Username).IsRequired(true);
			builder.Property(p => p.Password).IsRequired(true);
		}
	}
}
