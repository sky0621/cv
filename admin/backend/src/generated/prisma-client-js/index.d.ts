
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Basic
 * 
 */
export type Basic = {
  id: number
  nickname: string
  birthday: string
  job: string
  belong_to: string
}

/**
 * Model Like
 * 
 */
export type Like = {
  id: number
  name: string
}

/**
 * Model Output
 * 
 */
export type Output = {
  id: number
  name: string
  url: string | null
  icon: string | null
}

/**
 * Model Qualification
 * 
 */
export type Qualification = {
  id: number
  name: string
  org: string | null
  url: string | null
  date: string | null
  note: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Basics
 * const basics = await prisma.basic.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Basics
   * const basics = await prisma.basic.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.basic`: Exposes CRUD operations for the **Basic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basics
    * const basics = await prisma.basic.findMany()
    * ```
    */
  get basic(): Prisma.BasicDelegate<GlobalReject>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<GlobalReject>;

  /**
   * `prisma.output`: Exposes CRUD operations for the **Output** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outputs
    * const outputs = await prisma.output.findMany()
    * ```
    */
  get output(): Prisma.OutputDelegate<GlobalReject>;

  /**
   * `prisma.qualification`: Exposes CRUD operations for the **Qualification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qualifications
    * const qualifications = await prisma.qualification.findMany()
    * ```
    */
  get qualification(): Prisma.QualificationDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.9.2
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Basic: 'Basic',
    Like: 'Like',
    Output: 'Output',
    Qualification: 'Qualification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BasicCountOutputType
   */


  export type BasicCountOutputType = {
    likes: number
    outputs: number
    qualifications: number
  }

  export type BasicCountOutputTypeSelect = {
    likes?: boolean
    outputs?: boolean
    qualifications?: boolean
  }

  export type BasicCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BasicCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BasicCountOutputType
    : S extends undefined
    ? never
    : S extends BasicCountOutputTypeArgs
    ?'include' extends U
    ? BasicCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof BasicCountOutputType ?BasicCountOutputType [P]
  : 
     never
  } 
    : BasicCountOutputType
  : BasicCountOutputType




  // Custom InputTypes

  /**
   * BasicCountOutputType without action
   */
  export type BasicCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BasicCountOutputType
     * 
    **/
    select?: BasicCountOutputTypeSelect | null
  }



  /**
   * Count Type LikeCountOutputType
   */


  export type LikeCountOutputType = {
    basics: number
  }

  export type LikeCountOutputTypeSelect = {
    basics?: boolean
  }

  export type LikeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LikeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LikeCountOutputType
    : S extends undefined
    ? never
    : S extends LikeCountOutputTypeArgs
    ?'include' extends U
    ? LikeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof LikeCountOutputType ?LikeCountOutputType [P]
  : 
     never
  } 
    : LikeCountOutputType
  : LikeCountOutputType




  // Custom InputTypes

  /**
   * LikeCountOutputType without action
   */
  export type LikeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LikeCountOutputType
     * 
    **/
    select?: LikeCountOutputTypeSelect | null
  }



  /**
   * Count Type OutputCountOutputType
   */


  export type OutputCountOutputType = {
    basics: number
  }

  export type OutputCountOutputTypeSelect = {
    basics?: boolean
  }

  export type OutputCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OutputCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OutputCountOutputType
    : S extends undefined
    ? never
    : S extends OutputCountOutputTypeArgs
    ?'include' extends U
    ? OutputCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof OutputCountOutputType ?OutputCountOutputType [P]
  : 
     never
  } 
    : OutputCountOutputType
  : OutputCountOutputType




  // Custom InputTypes

  /**
   * OutputCountOutputType without action
   */
  export type OutputCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OutputCountOutputType
     * 
    **/
    select?: OutputCountOutputTypeSelect | null
  }



  /**
   * Count Type QualificationCountOutputType
   */


  export type QualificationCountOutputType = {
    basics: number
  }

  export type QualificationCountOutputTypeSelect = {
    basics?: boolean
  }

  export type QualificationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QualificationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? QualificationCountOutputType
    : S extends undefined
    ? never
    : S extends QualificationCountOutputTypeArgs
    ?'include' extends U
    ? QualificationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof QualificationCountOutputType ?QualificationCountOutputType [P]
  : 
     never
  } 
    : QualificationCountOutputType
  : QualificationCountOutputType




  // Custom InputTypes

  /**
   * QualificationCountOutputType without action
   */
  export type QualificationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QualificationCountOutputType
     * 
    **/
    select?: QualificationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Basic
   */


  export type AggregateBasic = {
    _count: BasicCountAggregateOutputType | null
    _avg: BasicAvgAggregateOutputType | null
    _sum: BasicSumAggregateOutputType | null
    _min: BasicMinAggregateOutputType | null
    _max: BasicMaxAggregateOutputType | null
  }

  export type BasicAvgAggregateOutputType = {
    id: number | null
  }

  export type BasicSumAggregateOutputType = {
    id: number | null
  }

  export type BasicMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    birthday: string | null
    job: string | null
    belong_to: string | null
  }

  export type BasicMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    birthday: string | null
    job: string | null
    belong_to: string | null
  }

  export type BasicCountAggregateOutputType = {
    id: number
    nickname: number
    birthday: number
    job: number
    belong_to: number
    _all: number
  }


  export type BasicAvgAggregateInputType = {
    id?: true
  }

  export type BasicSumAggregateInputType = {
    id?: true
  }

  export type BasicMinAggregateInputType = {
    id?: true
    nickname?: true
    birthday?: true
    job?: true
    belong_to?: true
  }

  export type BasicMaxAggregateInputType = {
    id?: true
    nickname?: true
    birthday?: true
    job?: true
    belong_to?: true
  }

  export type BasicCountAggregateInputType = {
    id?: true
    nickname?: true
    birthday?: true
    job?: true
    belong_to?: true
    _all?: true
  }

  export type BasicAggregateArgs = {
    /**
     * Filter which Basic to aggregate.
     * 
    **/
    where?: BasicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basics to fetch.
     * 
    **/
    orderBy?: Enumerable<BasicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BasicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Basics
    **/
    _count?: true | BasicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BasicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BasicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasicMaxAggregateInputType
  }

  export type GetBasicAggregateType<T extends BasicAggregateArgs> = {
        [P in keyof T & keyof AggregateBasic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasic[P]>
      : GetScalarType<T[P], AggregateBasic[P]>
  }




  export type BasicGroupByArgs = {
    where?: BasicWhereInput
    orderBy?: Enumerable<BasicOrderByWithAggregationInput>
    by: Array<BasicScalarFieldEnum>
    having?: BasicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasicCountAggregateInputType | true
    _avg?: BasicAvgAggregateInputType
    _sum?: BasicSumAggregateInputType
    _min?: BasicMinAggregateInputType
    _max?: BasicMaxAggregateInputType
  }


  export type BasicGroupByOutputType = {
    id: number
    nickname: string
    birthday: string
    job: string
    belong_to: string
    _count: BasicCountAggregateOutputType | null
    _avg: BasicAvgAggregateOutputType | null
    _sum: BasicSumAggregateOutputType | null
    _min: BasicMinAggregateOutputType | null
    _max: BasicMaxAggregateOutputType | null
  }

  type GetBasicGroupByPayload<T extends BasicGroupByArgs> = Promise<
    Array<
      PickArray<BasicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BasicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BasicGroupByOutputType[P]>
            : GetScalarType<T[P], BasicGroupByOutputType[P]>
        }
      >
    >


  export type BasicSelect = {
    id?: boolean
    nickname?: boolean
    birthday?: boolean
    job?: boolean
    belong_to?: boolean
    likes?: boolean | LikeFindManyArgs
    outputs?: boolean | OutputFindManyArgs
    qualifications?: boolean | QualificationFindManyArgs
    _count?: boolean | BasicCountOutputTypeArgs
  }

  export type BasicInclude = {
    likes?: boolean | LikeFindManyArgs
    outputs?: boolean | OutputFindManyArgs
    qualifications?: boolean | QualificationFindManyArgs
    _count?: boolean | BasicCountOutputTypeArgs
  }

  export type BasicGetPayload<
    S extends boolean | null | undefined | BasicArgs,
    U = keyof S
      > = S extends true
        ? Basic
    : S extends undefined
    ? never
    : S extends BasicArgs | BasicFindManyArgs
    ?'include' extends U
    ? Basic  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'likes'
        ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends 'outputs'
        ? Array < OutputGetPayload<S['include'][P]>>  :
        P extends 'qualifications'
        ? Array < QualificationGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? BasicCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Basic ?Basic [P]
  : 
          P extends 'likes'
        ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends 'outputs'
        ? Array < OutputGetPayload<S['select'][P]>>  :
        P extends 'qualifications'
        ? Array < QualificationGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? BasicCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Basic
  : Basic


  type BasicCountArgs = Merge<
    Omit<BasicFindManyArgs, 'select' | 'include'> & {
      select?: BasicCountAggregateInputType | true
    }
  >

  export interface BasicDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Basic that matches the filter.
     * @param {BasicFindUniqueArgs} args - Arguments to find a Basic
     * @example
     * // Get one Basic
     * const basic = await prisma.basic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BasicFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BasicFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Basic'> extends True ? CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>> : CheckSelect<T, Prisma__BasicClient<Basic | null >, Prisma__BasicClient<BasicGetPayload<T> | null >>

    /**
     * Find the first Basic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicFindFirstArgs} args - Arguments to find a Basic
     * @example
     * // Get one Basic
     * const basic = await prisma.basic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BasicFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BasicFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Basic'> extends True ? CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>> : CheckSelect<T, Prisma__BasicClient<Basic | null >, Prisma__BasicClient<BasicGetPayload<T> | null >>

    /**
     * Find zero or more Basics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basics
     * const basics = await prisma.basic.findMany()
     * 
     * // Get first 10 Basics
     * const basics = await prisma.basic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basicWithIdOnly = await prisma.basic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BasicFindManyArgs>(
      args?: SelectSubset<T, BasicFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Basic>>, PrismaPromise<Array<BasicGetPayload<T>>>>

    /**
     * Create a Basic.
     * @param {BasicCreateArgs} args - Arguments to create a Basic.
     * @example
     * // Create one Basic
     * const Basic = await prisma.basic.create({
     *   data: {
     *     // ... data to create a Basic
     *   }
     * })
     * 
    **/
    create<T extends BasicCreateArgs>(
      args: SelectSubset<T, BasicCreateArgs>
    ): CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>>

    /**
     * Delete a Basic.
     * @param {BasicDeleteArgs} args - Arguments to delete one Basic.
     * @example
     * // Delete one Basic
     * const Basic = await prisma.basic.delete({
     *   where: {
     *     // ... filter to delete one Basic
     *   }
     * })
     * 
    **/
    delete<T extends BasicDeleteArgs>(
      args: SelectSubset<T, BasicDeleteArgs>
    ): CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>>

    /**
     * Update one Basic.
     * @param {BasicUpdateArgs} args - Arguments to update one Basic.
     * @example
     * // Update one Basic
     * const basic = await prisma.basic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BasicUpdateArgs>(
      args: SelectSubset<T, BasicUpdateArgs>
    ): CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>>

    /**
     * Delete zero or more Basics.
     * @param {BasicDeleteManyArgs} args - Arguments to filter Basics to delete.
     * @example
     * // Delete a few Basics
     * const { count } = await prisma.basic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BasicDeleteManyArgs>(
      args?: SelectSubset<T, BasicDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basics
     * const basic = await prisma.basic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BasicUpdateManyArgs>(
      args: SelectSubset<T, BasicUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basic.
     * @param {BasicUpsertArgs} args - Arguments to update or create a Basic.
     * @example
     * // Update or create a Basic
     * const basic = await prisma.basic.upsert({
     *   create: {
     *     // ... data to create a Basic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basic we want to update
     *   }
     * })
    **/
    upsert<T extends BasicUpsertArgs>(
      args: SelectSubset<T, BasicUpsertArgs>
    ): CheckSelect<T, Prisma__BasicClient<Basic>, Prisma__BasicClient<BasicGetPayload<T>>>

    /**
     * Count the number of Basics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicCountArgs} args - Arguments to filter Basics to count.
     * @example
     * // Count the number of Basics
     * const count = await prisma.basic.count({
     *   where: {
     *     // ... the filter for the Basics we want to count
     *   }
     * })
    **/
    count<T extends BasicCountArgs>(
      args?: Subset<T, BasicCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BasicAggregateArgs>(args: Subset<T, BasicAggregateArgs>): PrismaPromise<GetBasicAggregateType<T>>

    /**
     * Group by Basic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BasicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BasicGroupByArgs['orderBy'] }
        : { orderBy?: BasicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BasicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasicGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Basic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BasicClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    outputs<T extends OutputFindManyArgs = {}>(args?: Subset<T, OutputFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Output>>, PrismaPromise<Array<OutputGetPayload<T>>>>;

    qualifications<T extends QualificationFindManyArgs = {}>(args?: Subset<T, QualificationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Qualification>>, PrismaPromise<Array<QualificationGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Basic findUnique
   */
  export type BasicFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * Throw an Error if a Basic can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Basic to fetch.
     * 
    **/
    where: BasicWhereUniqueInput
  }


  /**
   * Basic findFirst
   */
  export type BasicFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * Throw an Error if a Basic can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Basic to fetch.
     * 
    **/
    where?: BasicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basics to fetch.
     * 
    **/
    orderBy?: Enumerable<BasicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Basics.
     * 
    **/
    cursor?: BasicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Basics.
     * 
    **/
    distinct?: Enumerable<BasicScalarFieldEnum>
  }


  /**
   * Basic findMany
   */
  export type BasicFindManyArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * Filter, which Basics to fetch.
     * 
    **/
    where?: BasicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basics to fetch.
     * 
    **/
    orderBy?: Enumerable<BasicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Basics.
     * 
    **/
    cursor?: BasicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basics.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BasicScalarFieldEnum>
  }


  /**
   * Basic create
   */
  export type BasicCreateArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * The data needed to create a Basic.
     * 
    **/
    data: XOR<BasicCreateInput, BasicUncheckedCreateInput>
  }


  /**
   * Basic update
   */
  export type BasicUpdateArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * The data needed to update a Basic.
     * 
    **/
    data: XOR<BasicUpdateInput, BasicUncheckedUpdateInput>
    /**
     * Choose, which Basic to update.
     * 
    **/
    where: BasicWhereUniqueInput
  }


  /**
   * Basic updateMany
   */
  export type BasicUpdateManyArgs = {
    /**
     * The data used to update Basics.
     * 
    **/
    data: XOR<BasicUpdateManyMutationInput, BasicUncheckedUpdateManyInput>
    /**
     * Filter which Basics to update
     * 
    **/
    where?: BasicWhereInput
  }


  /**
   * Basic upsert
   */
  export type BasicUpsertArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * The filter to search for the Basic to update in case it exists.
     * 
    **/
    where: BasicWhereUniqueInput
    /**
     * In case the Basic found by the `where` argument doesn't exist, create a new Basic with this data.
     * 
    **/
    create: XOR<BasicCreateInput, BasicUncheckedCreateInput>
    /**
     * In case the Basic was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BasicUpdateInput, BasicUncheckedUpdateInput>
  }


  /**
   * Basic delete
   */
  export type BasicDeleteArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
    /**
     * Filter which Basic to delete.
     * 
    **/
    where: BasicWhereUniqueInput
  }


  /**
   * Basic deleteMany
   */
  export type BasicDeleteManyArgs = {
    /**
     * Filter which Basics to delete
     * 
    **/
    where?: BasicWhereInput
  }


  /**
   * Basic without action
   */
  export type BasicArgs = {
    /**
     * Select specific fields to fetch from the Basic
     * 
    **/
    select?: BasicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BasicInclude | null
  }



  /**
   * Model Like
   */


  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LikeAggregateArgs = {
    /**
     * Filter which Like to aggregate.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs = {
    where?: LikeWhereInput
    orderBy?: Enumerable<LikeOrderByWithAggregationInput>
    by: Array<LikeScalarFieldEnum>
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }


  export type LikeGroupByOutputType = {
    id: number
    name: string
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Promise<
    Array<
      PickArray<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect = {
    id?: boolean
    name?: boolean
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | LikeCountOutputTypeArgs
  }

  export type LikeInclude = {
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | LikeCountOutputTypeArgs
  }

  export type LikeGetPayload<
    S extends boolean | null | undefined | LikeArgs,
    U = keyof S
      > = S extends true
        ? Like
    : S extends undefined
    ? never
    : S extends LikeArgs | LikeFindManyArgs
    ?'include' extends U
    ? Like  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basics'
        ? Array < BasicGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? LikeCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Like ?Like [P]
  : 
          P extends 'basics'
        ? Array < BasicGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? LikeCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Like
  : Like


  type LikeCountArgs = Merge<
    Omit<LikeFindManyArgs, 'select' | 'include'> & {
      select?: LikeCountAggregateInputType | true
    }
  >

  export interface LikeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LikeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LikeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikeFindManyArgs>(
      args?: SelectSubset<T, LikeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
    **/
    create<T extends LikeCreateArgs>(
      args: SelectSubset<T, LikeCreateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
    **/
    delete<T extends LikeDeleteArgs>(
      args: SelectSubset<T, LikeDeleteArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeUpdateArgs>(
      args: SelectSubset<T, LikeUpdateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeDeleteManyArgs>(
      args?: SelectSubset<T, LikeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeUpdateManyArgs>(
      args: SelectSubset<T, LikeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
    **/
    upsert<T extends LikeUpsertArgs>(
      args: SelectSubset<T, LikeUpsertArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LikeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basics<T extends BasicFindManyArgs = {}>(args?: Subset<T, BasicFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Basic>>, PrismaPromise<Array<BasicGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     * 
    **/
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like findMany
   */
  export type LikeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like create
   */
  export type LikeCreateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to create a Like.
     * 
    **/
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }


  /**
   * Like update
   */
  export type LikeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to update a Like.
     * 
    **/
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs = {
    /**
     * The data used to update Likes.
     * 
    **/
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     * 
    **/
    where?: LikeWhereInput
  }


  /**
   * Like upsert
   */
  export type LikeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The filter to search for the Like to update in case it exists.
     * 
    **/
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     * 
    **/
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }


  /**
   * Like delete
   */
  export type LikeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter which Like to delete.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs = {
    /**
     * Filter which Likes to delete
     * 
    **/
    where?: LikeWhereInput
  }


  /**
   * Like without action
   */
  export type LikeArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
  }



  /**
   * Model Output
   */


  export type AggregateOutput = {
    _count: OutputCountAggregateOutputType | null
    _avg: OutputAvgAggregateOutputType | null
    _sum: OutputSumAggregateOutputType | null
    _min: OutputMinAggregateOutputType | null
    _max: OutputMaxAggregateOutputType | null
  }

  export type OutputAvgAggregateOutputType = {
    id: number | null
  }

  export type OutputSumAggregateOutputType = {
    id: number | null
  }

  export type OutputMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    icon: string | null
  }

  export type OutputMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    icon: string | null
  }

  export type OutputCountAggregateOutputType = {
    id: number
    name: number
    url: number
    icon: number
    _all: number
  }


  export type OutputAvgAggregateInputType = {
    id?: true
  }

  export type OutputSumAggregateInputType = {
    id?: true
  }

  export type OutputMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    icon?: true
  }

  export type OutputMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    icon?: true
  }

  export type OutputCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    icon?: true
    _all?: true
  }

  export type OutputAggregateArgs = {
    /**
     * Filter which Output to aggregate.
     * 
    **/
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<OutputOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outputs
    **/
    _count?: true | OutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputMaxAggregateInputType
  }

  export type GetOutputAggregateType<T extends OutputAggregateArgs> = {
        [P in keyof T & keyof AggregateOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutput[P]>
      : GetScalarType<T[P], AggregateOutput[P]>
  }




  export type OutputGroupByArgs = {
    where?: OutputWhereInput
    orderBy?: Enumerable<OutputOrderByWithAggregationInput>
    by: Array<OutputScalarFieldEnum>
    having?: OutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputCountAggregateInputType | true
    _avg?: OutputAvgAggregateInputType
    _sum?: OutputSumAggregateInputType
    _min?: OutputMinAggregateInputType
    _max?: OutputMaxAggregateInputType
  }


  export type OutputGroupByOutputType = {
    id: number
    name: string
    url: string | null
    icon: string | null
    _count: OutputCountAggregateOutputType | null
    _avg: OutputAvgAggregateOutputType | null
    _sum: OutputSumAggregateOutputType | null
    _min: OutputMinAggregateOutputType | null
    _max: OutputMaxAggregateOutputType | null
  }

  type GetOutputGroupByPayload<T extends OutputGroupByArgs> = Promise<
    Array<
      PickArray<OutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputGroupByOutputType[P]>
            : GetScalarType<T[P], OutputGroupByOutputType[P]>
        }
      >
    >


  export type OutputSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    icon?: boolean
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | OutputCountOutputTypeArgs
  }

  export type OutputInclude = {
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | OutputCountOutputTypeArgs
  }

  export type OutputGetPayload<
    S extends boolean | null | undefined | OutputArgs,
    U = keyof S
      > = S extends true
        ? Output
    : S extends undefined
    ? never
    : S extends OutputArgs | OutputFindManyArgs
    ?'include' extends U
    ? Output  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basics'
        ? Array < BasicGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? OutputCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Output ?Output [P]
  : 
          P extends 'basics'
        ? Array < BasicGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? OutputCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Output
  : Output


  type OutputCountArgs = Merge<
    Omit<OutputFindManyArgs, 'select' | 'include'> & {
      select?: OutputCountAggregateInputType | true
    }
  >

  export interface OutputDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Output that matches the filter.
     * @param {OutputFindUniqueArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OutputFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OutputFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Output'> extends True ? CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>> : CheckSelect<T, Prisma__OutputClient<Output | null >, Prisma__OutputClient<OutputGetPayload<T> | null >>

    /**
     * Find the first Output that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputFindFirstArgs} args - Arguments to find a Output
     * @example
     * // Get one Output
     * const output = await prisma.output.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OutputFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OutputFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Output'> extends True ? CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>> : CheckSelect<T, Prisma__OutputClient<Output | null >, Prisma__OutputClient<OutputGetPayload<T> | null >>

    /**
     * Find zero or more Outputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outputs
     * const outputs = await prisma.output.findMany()
     * 
     * // Get first 10 Outputs
     * const outputs = await prisma.output.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputWithIdOnly = await prisma.output.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OutputFindManyArgs>(
      args?: SelectSubset<T, OutputFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Output>>, PrismaPromise<Array<OutputGetPayload<T>>>>

    /**
     * Create a Output.
     * @param {OutputCreateArgs} args - Arguments to create a Output.
     * @example
     * // Create one Output
     * const Output = await prisma.output.create({
     *   data: {
     *     // ... data to create a Output
     *   }
     * })
     * 
    **/
    create<T extends OutputCreateArgs>(
      args: SelectSubset<T, OutputCreateArgs>
    ): CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>>

    /**
     * Delete a Output.
     * @param {OutputDeleteArgs} args - Arguments to delete one Output.
     * @example
     * // Delete one Output
     * const Output = await prisma.output.delete({
     *   where: {
     *     // ... filter to delete one Output
     *   }
     * })
     * 
    **/
    delete<T extends OutputDeleteArgs>(
      args: SelectSubset<T, OutputDeleteArgs>
    ): CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>>

    /**
     * Update one Output.
     * @param {OutputUpdateArgs} args - Arguments to update one Output.
     * @example
     * // Update one Output
     * const output = await prisma.output.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OutputUpdateArgs>(
      args: SelectSubset<T, OutputUpdateArgs>
    ): CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>>

    /**
     * Delete zero or more Outputs.
     * @param {OutputDeleteManyArgs} args - Arguments to filter Outputs to delete.
     * @example
     * // Delete a few Outputs
     * const { count } = await prisma.output.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OutputDeleteManyArgs>(
      args?: SelectSubset<T, OutputDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outputs
     * const output = await prisma.output.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OutputUpdateManyArgs>(
      args: SelectSubset<T, OutputUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Output.
     * @param {OutputUpsertArgs} args - Arguments to update or create a Output.
     * @example
     * // Update or create a Output
     * const output = await prisma.output.upsert({
     *   create: {
     *     // ... data to create a Output
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Output we want to update
     *   }
     * })
    **/
    upsert<T extends OutputUpsertArgs>(
      args: SelectSubset<T, OutputUpsertArgs>
    ): CheckSelect<T, Prisma__OutputClient<Output>, Prisma__OutputClient<OutputGetPayload<T>>>

    /**
     * Count the number of Outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputCountArgs} args - Arguments to filter Outputs to count.
     * @example
     * // Count the number of Outputs
     * const count = await prisma.output.count({
     *   where: {
     *     // ... the filter for the Outputs we want to count
     *   }
     * })
    **/
    count<T extends OutputCountArgs>(
      args?: Subset<T, OutputCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutputAggregateArgs>(args: Subset<T, OutputAggregateArgs>): PrismaPromise<GetOutputAggregateType<T>>

    /**
     * Group by Output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutputGroupByArgs['orderBy'] }
        : { orderBy?: OutputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Output.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OutputClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basics<T extends BasicFindManyArgs = {}>(args?: Subset<T, BasicFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Basic>>, PrismaPromise<Array<BasicGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Output findUnique
   */
  export type OutputFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * Throw an Error if a Output can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Output to fetch.
     * 
    **/
    where: OutputWhereUniqueInput
  }


  /**
   * Output findFirst
   */
  export type OutputFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * Throw an Error if a Output can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Output to fetch.
     * 
    **/
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<OutputOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outputs.
     * 
    **/
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outputs.
     * 
    **/
    distinct?: Enumerable<OutputScalarFieldEnum>
  }


  /**
   * Output findMany
   */
  export type OutputFindManyArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * Filter, which Outputs to fetch.
     * 
    **/
    where?: OutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<OutputOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outputs.
     * 
    **/
    cursor?: OutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outputs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OutputScalarFieldEnum>
  }


  /**
   * Output create
   */
  export type OutputCreateArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * The data needed to create a Output.
     * 
    **/
    data: XOR<OutputCreateInput, OutputUncheckedCreateInput>
  }


  /**
   * Output update
   */
  export type OutputUpdateArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * The data needed to update a Output.
     * 
    **/
    data: XOR<OutputUpdateInput, OutputUncheckedUpdateInput>
    /**
     * Choose, which Output to update.
     * 
    **/
    where: OutputWhereUniqueInput
  }


  /**
   * Output updateMany
   */
  export type OutputUpdateManyArgs = {
    /**
     * The data used to update Outputs.
     * 
    **/
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyInput>
    /**
     * Filter which Outputs to update
     * 
    **/
    where?: OutputWhereInput
  }


  /**
   * Output upsert
   */
  export type OutputUpsertArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * The filter to search for the Output to update in case it exists.
     * 
    **/
    where: OutputWhereUniqueInput
    /**
     * In case the Output found by the `where` argument doesn't exist, create a new Output with this data.
     * 
    **/
    create: XOR<OutputCreateInput, OutputUncheckedCreateInput>
    /**
     * In case the Output was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OutputUpdateInput, OutputUncheckedUpdateInput>
  }


  /**
   * Output delete
   */
  export type OutputDeleteArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
    /**
     * Filter which Output to delete.
     * 
    **/
    where: OutputWhereUniqueInput
  }


  /**
   * Output deleteMany
   */
  export type OutputDeleteManyArgs = {
    /**
     * Filter which Outputs to delete
     * 
    **/
    where?: OutputWhereInput
  }


  /**
   * Output without action
   */
  export type OutputArgs = {
    /**
     * Select specific fields to fetch from the Output
     * 
    **/
    select?: OutputSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OutputInclude | null
  }



  /**
   * Model Qualification
   */


  export type AggregateQualification = {
    _count: QualificationCountAggregateOutputType | null
    _avg: QualificationAvgAggregateOutputType | null
    _sum: QualificationSumAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  export type QualificationAvgAggregateOutputType = {
    id: number | null
  }

  export type QualificationSumAggregateOutputType = {
    id: number | null
  }

  export type QualificationMinAggregateOutputType = {
    id: number | null
    name: string | null
    org: string | null
    url: string | null
    date: string | null
    note: string | null
  }

  export type QualificationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    org: string | null
    url: string | null
    date: string | null
    note: string | null
  }

  export type QualificationCountAggregateOutputType = {
    id: number
    name: number
    org: number
    url: number
    date: number
    note: number
    _all: number
  }


  export type QualificationAvgAggregateInputType = {
    id?: true
  }

  export type QualificationSumAggregateInputType = {
    id?: true
  }

  export type QualificationMinAggregateInputType = {
    id?: true
    name?: true
    org?: true
    url?: true
    date?: true
    note?: true
  }

  export type QualificationMaxAggregateInputType = {
    id?: true
    name?: true
    org?: true
    url?: true
    date?: true
    note?: true
  }

  export type QualificationCountAggregateInputType = {
    id?: true
    name?: true
    org?: true
    url?: true
    date?: true
    note?: true
    _all?: true
  }

  export type QualificationAggregateArgs = {
    /**
     * Filter which Qualification to aggregate.
     * 
    **/
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     * 
    **/
    orderBy?: Enumerable<QualificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qualifications
    **/
    _count?: true | QualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationMaxAggregateInputType
  }

  export type GetQualificationAggregateType<T extends QualificationAggregateArgs> = {
        [P in keyof T & keyof AggregateQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualification[P]>
      : GetScalarType<T[P], AggregateQualification[P]>
  }




  export type QualificationGroupByArgs = {
    where?: QualificationWhereInput
    orderBy?: Enumerable<QualificationOrderByWithAggregationInput>
    by: Array<QualificationScalarFieldEnum>
    having?: QualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCountAggregateInputType | true
    _avg?: QualificationAvgAggregateInputType
    _sum?: QualificationSumAggregateInputType
    _min?: QualificationMinAggregateInputType
    _max?: QualificationMaxAggregateInputType
  }


  export type QualificationGroupByOutputType = {
    id: number
    name: string
    org: string | null
    url: string | null
    date: string | null
    note: string | null
    _count: QualificationCountAggregateOutputType | null
    _avg: QualificationAvgAggregateOutputType | null
    _sum: QualificationSumAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  type GetQualificationGroupByPayload<T extends QualificationGroupByArgs> = Promise<
    Array<
      PickArray<QualificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationGroupByOutputType[P]>
        }
      >
    >


  export type QualificationSelect = {
    id?: boolean
    name?: boolean
    org?: boolean
    url?: boolean
    date?: boolean
    note?: boolean
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | QualificationCountOutputTypeArgs
  }

  export type QualificationInclude = {
    basics?: boolean | BasicFindManyArgs
    _count?: boolean | QualificationCountOutputTypeArgs
  }

  export type QualificationGetPayload<
    S extends boolean | null | undefined | QualificationArgs,
    U = keyof S
      > = S extends true
        ? Qualification
    : S extends undefined
    ? never
    : S extends QualificationArgs | QualificationFindManyArgs
    ?'include' extends U
    ? Qualification  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basics'
        ? Array < BasicGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? QualificationCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Qualification ?Qualification [P]
  : 
          P extends 'basics'
        ? Array < BasicGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? QualificationCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Qualification
  : Qualification


  type QualificationCountArgs = Merge<
    Omit<QualificationFindManyArgs, 'select' | 'include'> & {
      select?: QualificationCountAggregateInputType | true
    }
  >

  export interface QualificationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Qualification that matches the filter.
     * @param {QualificationFindUniqueArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QualificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QualificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Qualification'> extends True ? CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>> : CheckSelect<T, Prisma__QualificationClient<Qualification | null >, Prisma__QualificationClient<QualificationGetPayload<T> | null >>

    /**
     * Find the first Qualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindFirstArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QualificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QualificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Qualification'> extends True ? CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>> : CheckSelect<T, Prisma__QualificationClient<Qualification | null >, Prisma__QualificationClient<QualificationGetPayload<T> | null >>

    /**
     * Find zero or more Qualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qualifications
     * const qualifications = await prisma.qualification.findMany()
     * 
     * // Get first 10 Qualifications
     * const qualifications = await prisma.qualification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationWithIdOnly = await prisma.qualification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QualificationFindManyArgs>(
      args?: SelectSubset<T, QualificationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Qualification>>, PrismaPromise<Array<QualificationGetPayload<T>>>>

    /**
     * Create a Qualification.
     * @param {QualificationCreateArgs} args - Arguments to create a Qualification.
     * @example
     * // Create one Qualification
     * const Qualification = await prisma.qualification.create({
     *   data: {
     *     // ... data to create a Qualification
     *   }
     * })
     * 
    **/
    create<T extends QualificationCreateArgs>(
      args: SelectSubset<T, QualificationCreateArgs>
    ): CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>>

    /**
     * Delete a Qualification.
     * @param {QualificationDeleteArgs} args - Arguments to delete one Qualification.
     * @example
     * // Delete one Qualification
     * const Qualification = await prisma.qualification.delete({
     *   where: {
     *     // ... filter to delete one Qualification
     *   }
     * })
     * 
    **/
    delete<T extends QualificationDeleteArgs>(
      args: SelectSubset<T, QualificationDeleteArgs>
    ): CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>>

    /**
     * Update one Qualification.
     * @param {QualificationUpdateArgs} args - Arguments to update one Qualification.
     * @example
     * // Update one Qualification
     * const qualification = await prisma.qualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QualificationUpdateArgs>(
      args: SelectSubset<T, QualificationUpdateArgs>
    ): CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>>

    /**
     * Delete zero or more Qualifications.
     * @param {QualificationDeleteManyArgs} args - Arguments to filter Qualifications to delete.
     * @example
     * // Delete a few Qualifications
     * const { count } = await prisma.qualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QualificationDeleteManyArgs>(
      args?: SelectSubset<T, QualificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qualifications
     * const qualification = await prisma.qualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QualificationUpdateManyArgs>(
      args: SelectSubset<T, QualificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Qualification.
     * @param {QualificationUpsertArgs} args - Arguments to update or create a Qualification.
     * @example
     * // Update or create a Qualification
     * const qualification = await prisma.qualification.upsert({
     *   create: {
     *     // ... data to create a Qualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qualification we want to update
     *   }
     * })
    **/
    upsert<T extends QualificationUpsertArgs>(
      args: SelectSubset<T, QualificationUpsertArgs>
    ): CheckSelect<T, Prisma__QualificationClient<Qualification>, Prisma__QualificationClient<QualificationGetPayload<T>>>

    /**
     * Count the number of Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCountArgs} args - Arguments to filter Qualifications to count.
     * @example
     * // Count the number of Qualifications
     * const count = await prisma.qualification.count({
     *   where: {
     *     // ... the filter for the Qualifications we want to count
     *   }
     * })
    **/
    count<T extends QualificationCountArgs>(
      args?: Subset<T, QualificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QualificationAggregateArgs>(args: Subset<T, QualificationAggregateArgs>): PrismaPromise<GetQualificationAggregateType<T>>

    /**
     * Group by Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QualificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationGroupByArgs['orderBy'] }
        : { orderBy?: QualificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QualificationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basics<T extends BasicFindManyArgs = {}>(args?: Subset<T, BasicFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Basic>>, PrismaPromise<Array<BasicGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Qualification findUnique
   */
  export type QualificationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * Throw an Error if a Qualification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Qualification to fetch.
     * 
    **/
    where: QualificationWhereUniqueInput
  }


  /**
   * Qualification findFirst
   */
  export type QualificationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * Throw an Error if a Qualification can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Qualification to fetch.
     * 
    **/
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     * 
    **/
    orderBy?: Enumerable<QualificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qualifications.
     * 
    **/
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qualifications.
     * 
    **/
    distinct?: Enumerable<QualificationScalarFieldEnum>
  }


  /**
   * Qualification findMany
   */
  export type QualificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * Filter, which Qualifications to fetch.
     * 
    **/
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qualifications to fetch.
     * 
    **/
    orderBy?: Enumerable<QualificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qualifications.
     * 
    **/
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qualifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qualifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QualificationScalarFieldEnum>
  }


  /**
   * Qualification create
   */
  export type QualificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * The data needed to create a Qualification.
     * 
    **/
    data: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
  }


  /**
   * Qualification update
   */
  export type QualificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * The data needed to update a Qualification.
     * 
    **/
    data: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
    /**
     * Choose, which Qualification to update.
     * 
    **/
    where: QualificationWhereUniqueInput
  }


  /**
   * Qualification updateMany
   */
  export type QualificationUpdateManyArgs = {
    /**
     * The data used to update Qualifications.
     * 
    **/
    data: XOR<QualificationUpdateManyMutationInput, QualificationUncheckedUpdateManyInput>
    /**
     * Filter which Qualifications to update
     * 
    **/
    where?: QualificationWhereInput
  }


  /**
   * Qualification upsert
   */
  export type QualificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * The filter to search for the Qualification to update in case it exists.
     * 
    **/
    where: QualificationWhereUniqueInput
    /**
     * In case the Qualification found by the `where` argument doesn't exist, create a new Qualification with this data.
     * 
    **/
    create: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
    /**
     * In case the Qualification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
  }


  /**
   * Qualification delete
   */
  export type QualificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
    /**
     * Filter which Qualification to delete.
     * 
    **/
    where: QualificationWhereUniqueInput
  }


  /**
   * Qualification deleteMany
   */
  export type QualificationDeleteManyArgs = {
    /**
     * Filter which Qualifications to delete
     * 
    **/
    where?: QualificationWhereInput
  }


  /**
   * Qualification without action
   */
  export type QualificationArgs = {
    /**
     * Select specific fields to fetch from the Qualification
     * 
    **/
    select?: QualificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: QualificationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BasicScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    birthday: 'birthday',
    job: 'job',
    belong_to: 'belong_to'
  };

  export type BasicScalarFieldEnum = (typeof BasicScalarFieldEnum)[keyof typeof BasicScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const OutputScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    icon: 'icon'
  };

  export type OutputScalarFieldEnum = (typeof OutputScalarFieldEnum)[keyof typeof OutputScalarFieldEnum]


  export const QualificationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    org: 'org',
    url: 'url',
    date: 'date',
    note: 'note'
  };

  export type QualificationScalarFieldEnum = (typeof QualificationScalarFieldEnum)[keyof typeof QualificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type BasicWhereInput = {
    AND?: Enumerable<BasicWhereInput>
    OR?: Enumerable<BasicWhereInput>
    NOT?: Enumerable<BasicWhereInput>
    id?: IntFilter | number
    nickname?: StringFilter | string
    birthday?: StringFilter | string
    job?: StringFilter | string
    belong_to?: StringFilter | string
    likes?: LikeListRelationFilter
    outputs?: OutputListRelationFilter
    qualifications?: QualificationListRelationFilter
  }

  export type BasicOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    birthday?: SortOrder
    job?: SortOrder
    belong_to?: SortOrder
    likes?: LikeOrderByRelationAggregateInput
    outputs?: OutputOrderByRelationAggregateInput
    qualifications?: QualificationOrderByRelationAggregateInput
  }

  export type BasicWhereUniqueInput = {
    id?: number
  }

  export type BasicOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    birthday?: SortOrder
    job?: SortOrder
    belong_to?: SortOrder
    _count?: BasicCountOrderByAggregateInput
    _avg?: BasicAvgOrderByAggregateInput
    _max?: BasicMaxOrderByAggregateInput
    _min?: BasicMinOrderByAggregateInput
    _sum?: BasicSumOrderByAggregateInput
  }

  export type BasicScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BasicScalarWhereWithAggregatesInput>
    OR?: Enumerable<BasicScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BasicScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nickname?: StringWithAggregatesFilter | string
    birthday?: StringWithAggregatesFilter | string
    job?: StringWithAggregatesFilter | string
    belong_to?: StringWithAggregatesFilter | string
  }

  export type LikeWhereInput = {
    AND?: Enumerable<LikeWhereInput>
    OR?: Enumerable<LikeWhereInput>
    NOT?: Enumerable<LikeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    basics?: BasicListRelationFilter
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    basics?: BasicOrderByRelationAggregateInput
  }

  export type LikeWhereUniqueInput = {
    id?: number
  }

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LikeScalarWhereWithAggregatesInput>
    OR?: Enumerable<LikeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LikeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type OutputWhereInput = {
    AND?: Enumerable<OutputWhereInput>
    OR?: Enumerable<OutputWhereInput>
    NOT?: Enumerable<OutputWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    url?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    basics?: BasicListRelationFilter
  }

  export type OutputOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    basics?: BasicOrderByRelationAggregateInput
  }

  export type OutputWhereUniqueInput = {
    id?: number
  }

  export type OutputOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    _count?: OutputCountOrderByAggregateInput
    _avg?: OutputAvgOrderByAggregateInput
    _max?: OutputMaxOrderByAggregateInput
    _min?: OutputMinOrderByAggregateInput
    _sum?: OutputSumOrderByAggregateInput
  }

  export type OutputScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OutputScalarWhereWithAggregatesInput>
    OR?: Enumerable<OutputScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OutputScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    url?: StringNullableWithAggregatesFilter | string | null
    icon?: StringNullableWithAggregatesFilter | string | null
  }

  export type QualificationWhereInput = {
    AND?: Enumerable<QualificationWhereInput>
    OR?: Enumerable<QualificationWhereInput>
    NOT?: Enumerable<QualificationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    org?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    date?: StringNullableFilter | string | null
    note?: StringNullableFilter | string | null
    basics?: BasicListRelationFilter
  }

  export type QualificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    org?: SortOrder
    url?: SortOrder
    date?: SortOrder
    note?: SortOrder
    basics?: BasicOrderByRelationAggregateInput
  }

  export type QualificationWhereUniqueInput = {
    id?: number
  }

  export type QualificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    org?: SortOrder
    url?: SortOrder
    date?: SortOrder
    note?: SortOrder
    _count?: QualificationCountOrderByAggregateInput
    _avg?: QualificationAvgOrderByAggregateInput
    _max?: QualificationMaxOrderByAggregateInput
    _min?: QualificationMinOrderByAggregateInput
    _sum?: QualificationSumOrderByAggregateInput
  }

  export type QualificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QualificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<QualificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QualificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    org?: StringNullableWithAggregatesFilter | string | null
    url?: StringNullableWithAggregatesFilter | string | null
    date?: StringNullableWithAggregatesFilter | string | null
    note?: StringNullableWithAggregatesFilter | string | null
  }

  export type BasicCreateInput = {
    nickname: string
    birthday: string
    job: string
    belong_to: string
    likes?: LikeCreateNestedManyWithoutBasicsInput
    outputs?: OutputCreateNestedManyWithoutBasicsInput
    qualifications?: QualificationCreateNestedManyWithoutBasicsInput
  }

  export type BasicUncheckedCreateInput = {
    id?: number
    nickname: string
    birthday: string
    job: string
    belong_to: string
  }

  export type BasicUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
    likes?: LikeUpdateManyWithoutBasicsInput
    outputs?: OutputUpdateManyWithoutBasicsInput
    qualifications?: QualificationUpdateManyWithoutBasicsInput
  }

  export type BasicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type BasicUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type BasicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateInput = {
    name: string
    basics?: BasicCreateNestedManyWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type LikeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    basics?: BasicUpdateManyWithoutLikesInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OutputCreateInput = {
    name: string
    url?: string | null
    icon?: string | null
    basics?: BasicCreateNestedManyWithoutOutputsInput
  }

  export type OutputUncheckedCreateInput = {
    id?: number
    name: string
    url?: string | null
    icon?: string | null
  }

  export type OutputUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basics?: BasicUpdateManyWithoutOutputsInput
  }

  export type OutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCreateInput = {
    name: string
    org?: string | null
    url?: string | null
    date?: string | null
    note?: string | null
    basics?: BasicCreateNestedManyWithoutQualificationsInput
  }

  export type QualificationUncheckedCreateInput = {
    id?: number
    name: string
    org?: string | null
    url?: string | null
    date?: string | null
    note?: string | null
  }

  export type QualificationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    basics?: BasicUpdateManyWithoutQualificationsInput
  }

  export type QualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type OutputListRelationFilter = {
    every?: OutputWhereInput
    some?: OutputWhereInput
    none?: OutputWhereInput
  }

  export type QualificationListRelationFilter = {
    every?: QualificationWhereInput
    some?: QualificationWhereInput
    none?: QualificationWhereInput
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BasicCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    birthday?: SortOrder
    job?: SortOrder
    belong_to?: SortOrder
  }

  export type BasicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BasicMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    birthday?: SortOrder
    job?: SortOrder
    belong_to?: SortOrder
  }

  export type BasicMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    birthday?: SortOrder
    job?: SortOrder
    belong_to?: SortOrder
  }

  export type BasicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BasicListRelationFilter = {
    every?: BasicWhereInput
    some?: BasicWhereInput
    none?: BasicWhereInput
  }

  export type BasicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type OutputCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type OutputAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OutputMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type OutputMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type OutputSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type QualificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    org?: SortOrder
    url?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type QualificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    org?: SortOrder
    url?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type QualificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    org?: SortOrder
    url?: SortOrder
    date?: SortOrder
    note?: SortOrder
  }

  export type QualificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LikeCreateNestedManyWithoutBasicsInput = {
    create?: XOR<Enumerable<LikeCreateWithoutBasicsInput>, Enumerable<LikeUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutBasicsInput>
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type OutputCreateNestedManyWithoutBasicsInput = {
    create?: XOR<Enumerable<OutputCreateWithoutBasicsInput>, Enumerable<OutputUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<OutputCreateOrConnectWithoutBasicsInput>
    connect?: Enumerable<OutputWhereUniqueInput>
  }

  export type QualificationCreateNestedManyWithoutBasicsInput = {
    create?: XOR<Enumerable<QualificationCreateWithoutBasicsInput>, Enumerable<QualificationUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<QualificationCreateOrConnectWithoutBasicsInput>
    connect?: Enumerable<QualificationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LikeUpdateManyWithoutBasicsInput = {
    create?: XOR<Enumerable<LikeCreateWithoutBasicsInput>, Enumerable<LikeUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutBasicsInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutBasicsInput>
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutBasicsInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutBasicsInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type OutputUpdateManyWithoutBasicsInput = {
    create?: XOR<Enumerable<OutputCreateWithoutBasicsInput>, Enumerable<OutputUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<OutputCreateOrConnectWithoutBasicsInput>
    upsert?: Enumerable<OutputUpsertWithWhereUniqueWithoutBasicsInput>
    set?: Enumerable<OutputWhereUniqueInput>
    disconnect?: Enumerable<OutputWhereUniqueInput>
    delete?: Enumerable<OutputWhereUniqueInput>
    connect?: Enumerable<OutputWhereUniqueInput>
    update?: Enumerable<OutputUpdateWithWhereUniqueWithoutBasicsInput>
    updateMany?: Enumerable<OutputUpdateManyWithWhereWithoutBasicsInput>
    deleteMany?: Enumerable<OutputScalarWhereInput>
  }

  export type QualificationUpdateManyWithoutBasicsInput = {
    create?: XOR<Enumerable<QualificationCreateWithoutBasicsInput>, Enumerable<QualificationUncheckedCreateWithoutBasicsInput>>
    connectOrCreate?: Enumerable<QualificationCreateOrConnectWithoutBasicsInput>
    upsert?: Enumerable<QualificationUpsertWithWhereUniqueWithoutBasicsInput>
    set?: Enumerable<QualificationWhereUniqueInput>
    disconnect?: Enumerable<QualificationWhereUniqueInput>
    delete?: Enumerable<QualificationWhereUniqueInput>
    connect?: Enumerable<QualificationWhereUniqueInput>
    update?: Enumerable<QualificationUpdateWithWhereUniqueWithoutBasicsInput>
    updateMany?: Enumerable<QualificationUpdateManyWithWhereWithoutBasicsInput>
    deleteMany?: Enumerable<QualificationScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BasicCreateNestedManyWithoutLikesInput = {
    create?: XOR<Enumerable<BasicCreateWithoutLikesInput>, Enumerable<BasicUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutLikesInput>
    connect?: Enumerable<BasicWhereUniqueInput>
  }

  export type BasicUpdateManyWithoutLikesInput = {
    create?: XOR<Enumerable<BasicCreateWithoutLikesInput>, Enumerable<BasicUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<BasicUpsertWithWhereUniqueWithoutLikesInput>
    set?: Enumerable<BasicWhereUniqueInput>
    disconnect?: Enumerable<BasicWhereUniqueInput>
    delete?: Enumerable<BasicWhereUniqueInput>
    connect?: Enumerable<BasicWhereUniqueInput>
    update?: Enumerable<BasicUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<BasicUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<BasicScalarWhereInput>
  }

  export type BasicCreateNestedManyWithoutOutputsInput = {
    create?: XOR<Enumerable<BasicCreateWithoutOutputsInput>, Enumerable<BasicUncheckedCreateWithoutOutputsInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutOutputsInput>
    connect?: Enumerable<BasicWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BasicUpdateManyWithoutOutputsInput = {
    create?: XOR<Enumerable<BasicCreateWithoutOutputsInput>, Enumerable<BasicUncheckedCreateWithoutOutputsInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutOutputsInput>
    upsert?: Enumerable<BasicUpsertWithWhereUniqueWithoutOutputsInput>
    set?: Enumerable<BasicWhereUniqueInput>
    disconnect?: Enumerable<BasicWhereUniqueInput>
    delete?: Enumerable<BasicWhereUniqueInput>
    connect?: Enumerable<BasicWhereUniqueInput>
    update?: Enumerable<BasicUpdateWithWhereUniqueWithoutOutputsInput>
    updateMany?: Enumerable<BasicUpdateManyWithWhereWithoutOutputsInput>
    deleteMany?: Enumerable<BasicScalarWhereInput>
  }

  export type BasicCreateNestedManyWithoutQualificationsInput = {
    create?: XOR<Enumerable<BasicCreateWithoutQualificationsInput>, Enumerable<BasicUncheckedCreateWithoutQualificationsInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutQualificationsInput>
    connect?: Enumerable<BasicWhereUniqueInput>
  }

  export type BasicUpdateManyWithoutQualificationsInput = {
    create?: XOR<Enumerable<BasicCreateWithoutQualificationsInput>, Enumerable<BasicUncheckedCreateWithoutQualificationsInput>>
    connectOrCreate?: Enumerable<BasicCreateOrConnectWithoutQualificationsInput>
    upsert?: Enumerable<BasicUpsertWithWhereUniqueWithoutQualificationsInput>
    set?: Enumerable<BasicWhereUniqueInput>
    disconnect?: Enumerable<BasicWhereUniqueInput>
    delete?: Enumerable<BasicWhereUniqueInput>
    connect?: Enumerable<BasicWhereUniqueInput>
    update?: Enumerable<BasicUpdateWithWhereUniqueWithoutQualificationsInput>
    updateMany?: Enumerable<BasicUpdateManyWithWhereWithoutQualificationsInput>
    deleteMany?: Enumerable<BasicScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type LikeCreateWithoutBasicsInput = {
    name: string
  }

  export type LikeUncheckedCreateWithoutBasicsInput = {
    id?: number
    name: string
  }

  export type LikeCreateOrConnectWithoutBasicsInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutBasicsInput, LikeUncheckedCreateWithoutBasicsInput>
  }

  export type OutputCreateWithoutBasicsInput = {
    name: string
    url?: string | null
    icon?: string | null
  }

  export type OutputUncheckedCreateWithoutBasicsInput = {
    id?: number
    name: string
    url?: string | null
    icon?: string | null
  }

  export type OutputCreateOrConnectWithoutBasicsInput = {
    where: OutputWhereUniqueInput
    create: XOR<OutputCreateWithoutBasicsInput, OutputUncheckedCreateWithoutBasicsInput>
  }

  export type QualificationCreateWithoutBasicsInput = {
    name: string
    org?: string | null
    url?: string | null
    date?: string | null
    note?: string | null
  }

  export type QualificationUncheckedCreateWithoutBasicsInput = {
    id?: number
    name: string
    org?: string | null
    url?: string | null
    date?: string | null
    note?: string | null
  }

  export type QualificationCreateOrConnectWithoutBasicsInput = {
    where: QualificationWhereUniqueInput
    create: XOR<QualificationCreateWithoutBasicsInput, QualificationUncheckedCreateWithoutBasicsInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutBasicsInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutBasicsInput, LikeUncheckedUpdateWithoutBasicsInput>
    create: XOR<LikeCreateWithoutBasicsInput, LikeUncheckedCreateWithoutBasicsInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutBasicsInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutBasicsInput, LikeUncheckedUpdateWithoutBasicsInput>
  }

  export type LikeUpdateManyWithWhereWithoutBasicsInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type LikeScalarWhereInput = {
    AND?: Enumerable<LikeScalarWhereInput>
    OR?: Enumerable<LikeScalarWhereInput>
    NOT?: Enumerable<LikeScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type OutputUpsertWithWhereUniqueWithoutBasicsInput = {
    where: OutputWhereUniqueInput
    update: XOR<OutputUpdateWithoutBasicsInput, OutputUncheckedUpdateWithoutBasicsInput>
    create: XOR<OutputCreateWithoutBasicsInput, OutputUncheckedCreateWithoutBasicsInput>
  }

  export type OutputUpdateWithWhereUniqueWithoutBasicsInput = {
    where: OutputWhereUniqueInput
    data: XOR<OutputUpdateWithoutBasicsInput, OutputUncheckedUpdateWithoutBasicsInput>
  }

  export type OutputUpdateManyWithWhereWithoutBasicsInput = {
    where: OutputScalarWhereInput
    data: XOR<OutputUpdateManyMutationInput, OutputUncheckedUpdateManyWithoutOutputsInput>
  }

  export type OutputScalarWhereInput = {
    AND?: Enumerable<OutputScalarWhereInput>
    OR?: Enumerable<OutputScalarWhereInput>
    NOT?: Enumerable<OutputScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    url?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
  }

  export type QualificationUpsertWithWhereUniqueWithoutBasicsInput = {
    where: QualificationWhereUniqueInput
    update: XOR<QualificationUpdateWithoutBasicsInput, QualificationUncheckedUpdateWithoutBasicsInput>
    create: XOR<QualificationCreateWithoutBasicsInput, QualificationUncheckedCreateWithoutBasicsInput>
  }

  export type QualificationUpdateWithWhereUniqueWithoutBasicsInput = {
    where: QualificationWhereUniqueInput
    data: XOR<QualificationUpdateWithoutBasicsInput, QualificationUncheckedUpdateWithoutBasicsInput>
  }

  export type QualificationUpdateManyWithWhereWithoutBasicsInput = {
    where: QualificationScalarWhereInput
    data: XOR<QualificationUpdateManyMutationInput, QualificationUncheckedUpdateManyWithoutQualificationsInput>
  }

  export type QualificationScalarWhereInput = {
    AND?: Enumerable<QualificationScalarWhereInput>
    OR?: Enumerable<QualificationScalarWhereInput>
    NOT?: Enumerable<QualificationScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    org?: StringNullableFilter | string | null
    url?: StringNullableFilter | string | null
    date?: StringNullableFilter | string | null
    note?: StringNullableFilter | string | null
  }

  export type BasicCreateWithoutLikesInput = {
    nickname: string
    birthday: string
    job: string
    belong_to: string
    outputs?: OutputCreateNestedManyWithoutBasicsInput
    qualifications?: QualificationCreateNestedManyWithoutBasicsInput
  }

  export type BasicUncheckedCreateWithoutLikesInput = {
    id?: number
    nickname: string
    birthday: string
    job: string
    belong_to: string
  }

  export type BasicCreateOrConnectWithoutLikesInput = {
    where: BasicWhereUniqueInput
    create: XOR<BasicCreateWithoutLikesInput, BasicUncheckedCreateWithoutLikesInput>
  }

  export type BasicUpsertWithWhereUniqueWithoutLikesInput = {
    where: BasicWhereUniqueInput
    update: XOR<BasicUpdateWithoutLikesInput, BasicUncheckedUpdateWithoutLikesInput>
    create: XOR<BasicCreateWithoutLikesInput, BasicUncheckedCreateWithoutLikesInput>
  }

  export type BasicUpdateWithWhereUniqueWithoutLikesInput = {
    where: BasicWhereUniqueInput
    data: XOR<BasicUpdateWithoutLikesInput, BasicUncheckedUpdateWithoutLikesInput>
  }

  export type BasicUpdateManyWithWhereWithoutLikesInput = {
    where: BasicScalarWhereInput
    data: XOR<BasicUpdateManyMutationInput, BasicUncheckedUpdateManyWithoutBasicsInput>
  }

  export type BasicScalarWhereInput = {
    AND?: Enumerable<BasicScalarWhereInput>
    OR?: Enumerable<BasicScalarWhereInput>
    NOT?: Enumerable<BasicScalarWhereInput>
    id?: IntFilter | number
    nickname?: StringFilter | string
    birthday?: StringFilter | string
    job?: StringFilter | string
    belong_to?: StringFilter | string
  }

  export type BasicCreateWithoutOutputsInput = {
    nickname: string
    birthday: string
    job: string
    belong_to: string
    likes?: LikeCreateNestedManyWithoutBasicsInput
    qualifications?: QualificationCreateNestedManyWithoutBasicsInput
  }

  export type BasicUncheckedCreateWithoutOutputsInput = {
    id?: number
    nickname: string
    birthday: string
    job: string
    belong_to: string
  }

  export type BasicCreateOrConnectWithoutOutputsInput = {
    where: BasicWhereUniqueInput
    create: XOR<BasicCreateWithoutOutputsInput, BasicUncheckedCreateWithoutOutputsInput>
  }

  export type BasicUpsertWithWhereUniqueWithoutOutputsInput = {
    where: BasicWhereUniqueInput
    update: XOR<BasicUpdateWithoutOutputsInput, BasicUncheckedUpdateWithoutOutputsInput>
    create: XOR<BasicCreateWithoutOutputsInput, BasicUncheckedCreateWithoutOutputsInput>
  }

  export type BasicUpdateWithWhereUniqueWithoutOutputsInput = {
    where: BasicWhereUniqueInput
    data: XOR<BasicUpdateWithoutOutputsInput, BasicUncheckedUpdateWithoutOutputsInput>
  }

  export type BasicUpdateManyWithWhereWithoutOutputsInput = {
    where: BasicScalarWhereInput
    data: XOR<BasicUpdateManyMutationInput, BasicUncheckedUpdateManyWithoutBasicsInput>
  }

  export type BasicCreateWithoutQualificationsInput = {
    nickname: string
    birthday: string
    job: string
    belong_to: string
    likes?: LikeCreateNestedManyWithoutBasicsInput
    outputs?: OutputCreateNestedManyWithoutBasicsInput
  }

  export type BasicUncheckedCreateWithoutQualificationsInput = {
    id?: number
    nickname: string
    birthday: string
    job: string
    belong_to: string
  }

  export type BasicCreateOrConnectWithoutQualificationsInput = {
    where: BasicWhereUniqueInput
    create: XOR<BasicCreateWithoutQualificationsInput, BasicUncheckedCreateWithoutQualificationsInput>
  }

  export type BasicUpsertWithWhereUniqueWithoutQualificationsInput = {
    where: BasicWhereUniqueInput
    update: XOR<BasicUpdateWithoutQualificationsInput, BasicUncheckedUpdateWithoutQualificationsInput>
    create: XOR<BasicCreateWithoutQualificationsInput, BasicUncheckedCreateWithoutQualificationsInput>
  }

  export type BasicUpdateWithWhereUniqueWithoutQualificationsInput = {
    where: BasicWhereUniqueInput
    data: XOR<BasicUpdateWithoutQualificationsInput, BasicUncheckedUpdateWithoutQualificationsInput>
  }

  export type BasicUpdateManyWithWhereWithoutQualificationsInput = {
    where: BasicScalarWhereInput
    data: XOR<BasicUpdateManyMutationInput, BasicUncheckedUpdateManyWithoutBasicsInput>
  }

  export type LikeUpdateWithoutBasicsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateWithoutBasicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OutputUpdateWithoutBasicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputUncheckedUpdateWithoutBasicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutputUncheckedUpdateManyWithoutOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationUpdateWithoutBasicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationUncheckedUpdateWithoutBasicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationUncheckedUpdateManyWithoutQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    org?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BasicUpdateWithoutLikesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
    outputs?: OutputUpdateManyWithoutBasicsInput
    qualifications?: QualificationUpdateManyWithoutBasicsInput
  }

  export type BasicUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type BasicUncheckedUpdateManyWithoutBasicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type BasicUpdateWithoutOutputsInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
    likes?: LikeUpdateManyWithoutBasicsInput
    qualifications?: QualificationUpdateManyWithoutBasicsInput
  }

  export type BasicUncheckedUpdateWithoutOutputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }

  export type BasicUpdateWithoutQualificationsInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
    likes?: LikeUpdateManyWithoutBasicsInput
    outputs?: OutputUpdateManyWithoutBasicsInput
  }

  export type BasicUncheckedUpdateWithoutQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    job?: StringFieldUpdateOperationsInput | string
    belong_to?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}