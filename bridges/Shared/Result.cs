namespace Bridges.Shared
{
    public struct Result<T>
    {
        public T Value { get; set; }
        public System.Exception Error { get; set; }

        public Result()
        {
            this.Value = default(T);
            this.Error = null;
        }
        public Result(T val)
        {
            this.Value = val;
            this.Error = null;
        }

        public Result(System.Exception err)
        {
            this.Error = err;
            this.Value = default(T);
        }

        public Result(T val, System.Exception err)
        {
            this.Error = err;
            this.Value = val;
        }

        public object Unwrap()
        {
            if (this.Equals == null)
            {
                return this.Value;
            }
            return this.Error;
        }
    }
}