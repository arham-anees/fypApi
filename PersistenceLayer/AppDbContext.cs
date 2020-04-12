using System;
using System.Collections.Generic;
using System.Text;
using BLL;
using Mapper;
using Microsoft.EntityFrameworkCore;

namespace PersistenceLayer {
	public class AppDbContext :DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
			optionsBuilder.UseSqlServer("Data Source =connectionStr");


		#region DbSets

		public DbSet<cUser> Users { get; set; }
		public DbSet<cFiles> Files { get; set; }

		#endregion


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
			modelBuilder.ApplyConfiguration(new cUserMapper());
		}
	}
}
