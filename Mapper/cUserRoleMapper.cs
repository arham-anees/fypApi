using BLL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mapper
{
	public class cUserRoleMapper : IEntityTypeConfiguration<cUserRole>
	{
		public void Configure(EntityTypeBuilder<cUserRole> builder)
		{
			builder.HasKey(p => p.Id);
			builder.Property(p => p.Name).HasMaxLength(200).IsRequired(false);
			builder.Property(p => p.Description).IsRequired(true);
		}
	}
}
