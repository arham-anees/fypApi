using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repositories {
	public abstract class cRepository<T> {
		public IQueryable<T> GetAll()
		{
			return null;
		}

		public IQueryable<T> Get(int id)
		{
			return null;
		}

		public T Insert(T obj)
		{
			return obj;
		}

		public T Delete(T obj)
		{
			return obj;
		}

		public T Update(T obj)
		{
			return obj;
		}
	}
}
