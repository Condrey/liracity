
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DepartMent
 * 
 */
export type DepartMent = $Result.DefaultSelection<Prisma.$DepartMentPayload>
/**
 * Model DepartMentalSector
 * 
 */
export type DepartMentalSector = $Result.DefaultSelection<Prisma.$DepartMentalSectorPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model NewsLetterSubscription
 * 
 */
export type NewsLetterSubscription = $Result.DefaultSelection<Prisma.$NewsLetterSubscriptionPayload>
/**
 * Model NewsLetter
 * 
 */
export type NewsLetter = $Result.DefaultSelection<Prisma.$NewsLetterPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model NewsComment
 * 
 */
export type NewsComment = $Result.DefaultSelection<Prisma.$NewsCommentPayload>
/**
 * Model NewsArticleLike
 * 
 */
export type NewsArticleLike = $Result.DefaultSelection<Prisma.$NewsArticleLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departMent`: Exposes CRUD operations for the **DepartMent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartMents
    * const departMents = await prisma.departMent.findMany()
    * ```
    */
  get departMent(): Prisma.DepartMentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departMentalSector`: Exposes CRUD operations for the **DepartMentalSector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartMentalSectors
    * const departMentalSectors = await prisma.departMentalSector.findMany()
    * ```
    */
  get departMentalSector(): Prisma.DepartMentalSectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsLetterSubscription`: Exposes CRUD operations for the **NewsLetterSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLetterSubscriptions
    * const newsLetterSubscriptions = await prisma.newsLetterSubscription.findMany()
    * ```
    */
  get newsLetterSubscription(): Prisma.NewsLetterSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsLetter`: Exposes CRUD operations for the **NewsLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLetters
    * const newsLetters = await prisma.newsLetter.findMany()
    * ```
    */
  get newsLetter(): Prisma.NewsLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsComment`: Exposes CRUD operations for the **NewsComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsComments
    * const newsComments = await prisma.newsComment.findMany()
    * ```
    */
  get newsComment(): Prisma.NewsCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticleLike`: Exposes CRUD operations for the **NewsArticleLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticleLikes
    * const newsArticleLikes = await prisma.newsArticleLike.findMany()
    * ```
    */
  get newsArticleLike(): Prisma.NewsArticleLikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DepartMent: 'DepartMent',
    DepartMentalSector: 'DepartMentalSector',
    Employee: 'Employee',
    EmailVerificationToken: 'EmailVerificationToken',
    Session: 'Session',
    NewsLetterSubscription: 'NewsLetterSubscription',
    NewsLetter: 'NewsLetter',
    NewsArticle: 'NewsArticle',
    NewsComment: 'NewsComment',
    NewsArticleLike: 'NewsArticleLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "departMent" | "departMentalSector" | "employee" | "emailVerificationToken" | "session" | "newsLetterSubscription" | "newsLetter" | "newsArticle" | "newsComment" | "newsArticleLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DepartMent: {
        payload: Prisma.$DepartMentPayload<ExtArgs>
        fields: Prisma.DepartMentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartMentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartMentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          findFirst: {
            args: Prisma.DepartMentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartMentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          findMany: {
            args: Prisma.DepartMentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>[]
          }
          create: {
            args: Prisma.DepartMentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          createMany: {
            args: Prisma.DepartMentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartMentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>[]
          }
          delete: {
            args: Prisma.DepartMentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          update: {
            args: Prisma.DepartMentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          deleteMany: {
            args: Prisma.DepartMentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartMentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartMentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>[]
          }
          upsert: {
            args: Prisma.DepartMentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentPayload>
          }
          aggregate: {
            args: Prisma.DepartMentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartMent>
          }
          groupBy: {
            args: Prisma.DepartMentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartMentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartMentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartMentCountAggregateOutputType> | number
          }
        }
      }
      DepartMentalSector: {
        payload: Prisma.$DepartMentalSectorPayload<ExtArgs>
        fields: Prisma.DepartMentalSectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartMentalSectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartMentalSectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          findFirst: {
            args: Prisma.DepartMentalSectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartMentalSectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          findMany: {
            args: Prisma.DepartMentalSectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>[]
          }
          create: {
            args: Prisma.DepartMentalSectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          createMany: {
            args: Prisma.DepartMentalSectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartMentalSectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>[]
          }
          delete: {
            args: Prisma.DepartMentalSectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          update: {
            args: Prisma.DepartMentalSectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          deleteMany: {
            args: Prisma.DepartMentalSectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartMentalSectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartMentalSectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>[]
          }
          upsert: {
            args: Prisma.DepartMentalSectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartMentalSectorPayload>
          }
          aggregate: {
            args: Prisma.DepartMentalSectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartMentalSector>
          }
          groupBy: {
            args: Prisma.DepartMentalSectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartMentalSectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartMentalSectorCountArgs<ExtArgs>
            result: $Utils.Optional<DepartMentalSectorCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      NewsLetterSubscription: {
        payload: Prisma.$NewsLetterSubscriptionPayload<ExtArgs>
        fields: Prisma.NewsLetterSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsLetterSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsLetterSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.NewsLetterSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsLetterSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          findMany: {
            args: Prisma.NewsLetterSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>[]
          }
          create: {
            args: Prisma.NewsLetterSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          createMany: {
            args: Prisma.NewsLetterSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsLetterSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.NewsLetterSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          update: {
            args: Prisma.NewsLetterSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.NewsLetterSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsLetterSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsLetterSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.NewsLetterSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.NewsLetterSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsLetterSubscription>
          }
          groupBy: {
            args: Prisma.NewsLetterSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsLetterSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      NewsLetter: {
        payload: Prisma.$NewsLetterPayload<ExtArgs>
        fields: Prisma.NewsLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          findFirst: {
            args: Prisma.NewsLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          findMany: {
            args: Prisma.NewsLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          create: {
            args: Prisma.NewsLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          createMany: {
            args: Prisma.NewsLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          delete: {
            args: Prisma.NewsLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          update: {
            args: Prisma.NewsLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          deleteMany: {
            args: Prisma.NewsLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          upsert: {
            args: Prisma.NewsLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          aggregate: {
            args: Prisma.NewsLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsLetter>
          }
          groupBy: {
            args: Prisma.NewsLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsLetterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      NewsComment: {
        payload: Prisma.$NewsCommentPayload<ExtArgs>
        fields: Prisma.NewsCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          findFirst: {
            args: Prisma.NewsCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          findMany: {
            args: Prisma.NewsCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>[]
          }
          create: {
            args: Prisma.NewsCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          createMany: {
            args: Prisma.NewsCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>[]
          }
          delete: {
            args: Prisma.NewsCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          update: {
            args: Prisma.NewsCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          deleteMany: {
            args: Prisma.NewsCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>[]
          }
          upsert: {
            args: Prisma.NewsCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCommentPayload>
          }
          aggregate: {
            args: Prisma.NewsCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsComment>
          }
          groupBy: {
            args: Prisma.NewsCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCommentCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCommentCountAggregateOutputType> | number
          }
        }
      }
      NewsArticleLike: {
        payload: Prisma.$NewsArticleLikePayload<ExtArgs>
        fields: Prisma.NewsArticleLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          findMany: {
            args: Prisma.NewsArticleLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>[]
          }
          create: {
            args: Prisma.NewsArticleLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          createMany: {
            args: Prisma.NewsArticleLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          update: {
            args: Prisma.NewsArticleLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleLikePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticleLike>
          }
          groupBy: {
            args: Prisma.NewsArticleLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleLikeCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    departMent?: DepartMentOmit
    departMentalSector?: DepartMentalSectorOmit
    employee?: EmployeeOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    session?: SessionOmit
    newsLetterSubscription?: NewsLetterSubscriptionOmit
    newsLetter?: NewsLetterOmit
    newsArticle?: NewsArticleOmit
    newsComment?: NewsCommentOmit
    newsArticleLike?: NewsArticleLikeOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emailVerificationTokens: number
    sessions: number
    newsArticles: number
    newsComments: number
    newsArticleLikes: number
    newsLetters: number
    employees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerificationTokens?: boolean | UserCountOutputTypeCountEmailVerificationTokensArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    newsArticles?: boolean | UserCountOutputTypeCountNewsArticlesArgs
    newsComments?: boolean | UserCountOutputTypeCountNewsCommentsArgs
    newsArticleLikes?: boolean | UserCountOutputTypeCountNewsArticleLikesArgs
    newsLetters?: boolean | UserCountOutputTypeCountNewsLettersArgs
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLetterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type DepartMentCountOutputType
   */

  export type DepartMentCountOutputType = {
    departmentalSectors: number
  }

  export type DepartMentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentalSectors?: boolean | DepartMentCountOutputTypeCountDepartmentalSectorsArgs
  }

  // Custom InputTypes
  /**
   * DepartMentCountOutputType without action
   */
  export type DepartMentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentCountOutputType
     */
    select?: DepartMentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartMentCountOutputType without action
   */
  export type DepartMentCountOutputTypeCountDepartmentalSectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartMentalSectorWhereInput
  }


  /**
   * Count Type DepartMentalSectorCountOutputType
   */

  export type DepartMentalSectorCountOutputType = {
    employees: number
  }

  export type DepartMentalSectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartMentalSectorCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartMentalSectorCountOutputType without action
   */
  export type DepartMentalSectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSectorCountOutputType
     */
    select?: DepartMentalSectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartMentalSectorCountOutputType without action
   */
  export type DepartMentalSectorCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    departMents: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departMents?: boolean | EmployeeCountOutputTypeCountDepartMentsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDepartMentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartMentWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    newsComments: number
    newsArticleLikes: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsComments?: boolean | NewsArticleCountOutputTypeCountNewsCommentsArgs
    newsArticleLikes?: boolean | NewsArticleCountOutputTypeCountNewsArticleLikesArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountNewsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCommentWhereInput
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountNewsArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    telephone: string | null
    passwordHash: string | null
    googleId: string | null
    bio: string | null
    isWelcomed: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    telephone: string | null
    passwordHash: string | null
    googleId: string | null
    bio: string | null
    isWelcomed: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    avatarUrl: number
    role: number
    createdAt: number
    telephone: number
    passwordHash: number
    googleId: number
    bio: number
    isWelcomed: number
    isVerified: number
    emailVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    telephone?: true
    passwordHash?: true
    googleId?: true
    bio?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    telephone?: true
    passwordHash?: true
    googleId?: true
    bio?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    telephone?: true
    passwordHash?: true
    googleId?: true
    bio?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    createdAt: Date
    telephone: string | null
    passwordHash: string | null
    googleId: string | null
    bio: string | null
    isWelcomed: boolean
    isVerified: boolean
    emailVerified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    telephone?: boolean
    passwordHash?: boolean
    googleId?: boolean
    bio?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    newsArticles?: boolean | User$newsArticlesArgs<ExtArgs>
    newsComments?: boolean | User$newsCommentsArgs<ExtArgs>
    newsArticleLikes?: boolean | User$newsArticleLikesArgs<ExtArgs>
    newsLetters?: boolean | User$newsLettersArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    telephone?: boolean
    passwordHash?: boolean
    googleId?: boolean
    bio?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    telephone?: boolean
    passwordHash?: boolean
    googleId?: boolean
    bio?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    telephone?: boolean
    passwordHash?: boolean
    googleId?: boolean
    bio?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "avatarUrl" | "role" | "createdAt" | "telephone" | "passwordHash" | "googleId" | "bio" | "isWelcomed" | "isVerified" | "emailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    newsArticles?: boolean | User$newsArticlesArgs<ExtArgs>
    newsComments?: boolean | User$newsCommentsArgs<ExtArgs>
    newsArticleLikes?: boolean | User$newsArticleLikesArgs<ExtArgs>
    newsLetters?: boolean | User$newsLettersArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailVerificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      newsArticles: Prisma.$NewsArticlePayload<ExtArgs>[]
      newsComments: Prisma.$NewsCommentPayload<ExtArgs>[]
      newsArticleLikes: Prisma.$NewsArticleLikePayload<ExtArgs>[]
      newsLetters: Prisma.$NewsLetterPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string | null
      email: string | null
      avatarUrl: string | null
      role: $Enums.Role | null
      createdAt: Date
      telephone: string | null
      passwordHash: string | null
      googleId: string | null
      bio: string | null
      isWelcomed: boolean
      isVerified: boolean
      emailVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailVerificationTokens<T extends User$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsArticles<T extends User$newsArticlesArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsComments<T extends User$newsCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsArticleLikes<T extends User$newsArticleLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArticleLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsLetters<T extends User$newsLettersArgs<ExtArgs> = {}>(args?: Subset<T, User$newsLettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isWelcomed: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailVerificationTokens
   */
  export type User$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.newsArticles
   */
  export type User$newsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * User.newsComments
   */
  export type User$newsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    where?: NewsCommentWhereInput
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    cursor?: NewsCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsCommentScalarFieldEnum | NewsCommentScalarFieldEnum[]
  }

  /**
   * User.newsArticleLikes
   */
  export type User$newsArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    where?: NewsArticleLikeWhereInput
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    cursor?: NewsArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleLikeScalarFieldEnum | NewsArticleLikeScalarFieldEnum[]
  }

  /**
   * User.newsLetters
   */
  export type User$newsLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    where?: NewsLetterWhereInput
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    cursor?: NewsLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DepartMent
   */

  export type AggregateDepartMent = {
    _count: DepartMentCountAggregateOutputType | null
    _min: DepartMentMinAggregateOutputType | null
    _max: DepartMentMaxAggregateOutputType | null
  }

  export type DepartMentMinAggregateOutputType = {
    id: string | null
    name: string | null
    about: string | null
    headOfDepartmentId: string | null
  }

  export type DepartMentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    about: string | null
    headOfDepartmentId: string | null
  }

  export type DepartMentCountAggregateOutputType = {
    id: number
    name: number
    about: number
    headOfDepartmentId: number
    _all: number
  }


  export type DepartMentMinAggregateInputType = {
    id?: true
    name?: true
    about?: true
    headOfDepartmentId?: true
  }

  export type DepartMentMaxAggregateInputType = {
    id?: true
    name?: true
    about?: true
    headOfDepartmentId?: true
  }

  export type DepartMentCountAggregateInputType = {
    id?: true
    name?: true
    about?: true
    headOfDepartmentId?: true
    _all?: true
  }

  export type DepartMentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartMent to aggregate.
     */
    where?: DepartMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMents to fetch.
     */
    orderBy?: DepartMentOrderByWithRelationInput | DepartMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartMents
    **/
    _count?: true | DepartMentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartMentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartMentMaxAggregateInputType
  }

  export type GetDepartMentAggregateType<T extends DepartMentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartMent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartMent[P]>
      : GetScalarType<T[P], AggregateDepartMent[P]>
  }




  export type DepartMentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartMentWhereInput
    orderBy?: DepartMentOrderByWithAggregationInput | DepartMentOrderByWithAggregationInput[]
    by: DepartMentScalarFieldEnum[] | DepartMentScalarFieldEnum
    having?: DepartMentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartMentCountAggregateInputType | true
    _min?: DepartMentMinAggregateInputType
    _max?: DepartMentMaxAggregateInputType
  }

  export type DepartMentGroupByOutputType = {
    id: string
    name: string
    about: string | null
    headOfDepartmentId: string | null
    _count: DepartMentCountAggregateOutputType | null
    _min: DepartMentMinAggregateOutputType | null
    _max: DepartMentMaxAggregateOutputType | null
  }

  type GetDepartMentGroupByPayload<T extends DepartMentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartMentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartMentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartMentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartMentGroupByOutputType[P]>
        }
      >
    >


  export type DepartMentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    headOfDepartmentId?: boolean
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
    departmentalSectors?: boolean | DepartMent$departmentalSectorsArgs<ExtArgs>
    _count?: boolean | DepartMentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departMent"]>

  export type DepartMentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    headOfDepartmentId?: boolean
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["departMent"]>

  export type DepartMentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    headOfDepartmentId?: boolean
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["departMent"]>

  export type DepartMentSelectScalar = {
    id?: boolean
    name?: boolean
    about?: boolean
    headOfDepartmentId?: boolean
  }

  export type DepartMentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "about" | "headOfDepartmentId", ExtArgs["result"]["departMent"]>
  export type DepartMentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
    departmentalSectors?: boolean | DepartMent$departmentalSectorsArgs<ExtArgs>
    _count?: boolean | DepartMentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartMentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
  }
  export type DepartMentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDepartment?: boolean | DepartMent$headOfDepartmentArgs<ExtArgs>
  }

  export type $DepartMentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartMent"
    objects: {
      headOfDepartment: Prisma.$EmployeePayload<ExtArgs> | null
      departmentalSectors: Prisma.$DepartMentalSectorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      about: string | null
      headOfDepartmentId: string | null
    }, ExtArgs["result"]["departMent"]>
    composites: {}
  }

  type DepartMentGetPayload<S extends boolean | null | undefined | DepartMentDefaultArgs> = $Result.GetResult<Prisma.$DepartMentPayload, S>

  type DepartMentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartMentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartMentCountAggregateInputType | true
    }

  export interface DepartMentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartMent'], meta: { name: 'DepartMent' } }
    /**
     * Find zero or one DepartMent that matches the filter.
     * @param {DepartMentFindUniqueArgs} args - Arguments to find a DepartMent
     * @example
     * // Get one DepartMent
     * const departMent = await prisma.departMent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartMentFindUniqueArgs>(args: SelectSubset<T, DepartMentFindUniqueArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepartMent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartMentFindUniqueOrThrowArgs} args - Arguments to find a DepartMent
     * @example
     * // Get one DepartMent
     * const departMent = await prisma.departMent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartMentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartMentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartMent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentFindFirstArgs} args - Arguments to find a DepartMent
     * @example
     * // Get one DepartMent
     * const departMent = await prisma.departMent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartMentFindFirstArgs>(args?: SelectSubset<T, DepartMentFindFirstArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartMent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentFindFirstOrThrowArgs} args - Arguments to find a DepartMent
     * @example
     * // Get one DepartMent
     * const departMent = await prisma.departMent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartMentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartMentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepartMents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartMents
     * const departMents = await prisma.departMent.findMany()
     * 
     * // Get first 10 DepartMents
     * const departMents = await prisma.departMent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departMentWithIdOnly = await prisma.departMent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartMentFindManyArgs>(args?: SelectSubset<T, DepartMentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepartMent.
     * @param {DepartMentCreateArgs} args - Arguments to create a DepartMent.
     * @example
     * // Create one DepartMent
     * const DepartMent = await prisma.departMent.create({
     *   data: {
     *     // ... data to create a DepartMent
     *   }
     * })
     * 
     */
    create<T extends DepartMentCreateArgs>(args: SelectSubset<T, DepartMentCreateArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepartMents.
     * @param {DepartMentCreateManyArgs} args - Arguments to create many DepartMents.
     * @example
     * // Create many DepartMents
     * const departMent = await prisma.departMent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartMentCreateManyArgs>(args?: SelectSubset<T, DepartMentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepartMents and returns the data saved in the database.
     * @param {DepartMentCreateManyAndReturnArgs} args - Arguments to create many DepartMents.
     * @example
     * // Create many DepartMents
     * const departMent = await prisma.departMent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepartMents and only return the `id`
     * const departMentWithIdOnly = await prisma.departMent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartMentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartMentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepartMent.
     * @param {DepartMentDeleteArgs} args - Arguments to delete one DepartMent.
     * @example
     * // Delete one DepartMent
     * const DepartMent = await prisma.departMent.delete({
     *   where: {
     *     // ... filter to delete one DepartMent
     *   }
     * })
     * 
     */
    delete<T extends DepartMentDeleteArgs>(args: SelectSubset<T, DepartMentDeleteArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepartMent.
     * @param {DepartMentUpdateArgs} args - Arguments to update one DepartMent.
     * @example
     * // Update one DepartMent
     * const departMent = await prisma.departMent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartMentUpdateArgs>(args: SelectSubset<T, DepartMentUpdateArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepartMents.
     * @param {DepartMentDeleteManyArgs} args - Arguments to filter DepartMents to delete.
     * @example
     * // Delete a few DepartMents
     * const { count } = await prisma.departMent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartMentDeleteManyArgs>(args?: SelectSubset<T, DepartMentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartMents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartMents
     * const departMent = await prisma.departMent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartMentUpdateManyArgs>(args: SelectSubset<T, DepartMentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartMents and returns the data updated in the database.
     * @param {DepartMentUpdateManyAndReturnArgs} args - Arguments to update many DepartMents.
     * @example
     * // Update many DepartMents
     * const departMent = await prisma.departMent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepartMents and only return the `id`
     * const departMentWithIdOnly = await prisma.departMent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartMentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartMentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepartMent.
     * @param {DepartMentUpsertArgs} args - Arguments to update or create a DepartMent.
     * @example
     * // Update or create a DepartMent
     * const departMent = await prisma.departMent.upsert({
     *   create: {
     *     // ... data to create a DepartMent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartMent we want to update
     *   }
     * })
     */
    upsert<T extends DepartMentUpsertArgs>(args: SelectSubset<T, DepartMentUpsertArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepartMents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentCountArgs} args - Arguments to filter DepartMents to count.
     * @example
     * // Count the number of DepartMents
     * const count = await prisma.departMent.count({
     *   where: {
     *     // ... the filter for the DepartMents we want to count
     *   }
     * })
    **/
    count<T extends DepartMentCountArgs>(
      args?: Subset<T, DepartMentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartMentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartMent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartMentAggregateArgs>(args: Subset<T, DepartMentAggregateArgs>): Prisma.PrismaPromise<GetDepartMentAggregateType<T>>

    /**
     * Group by DepartMent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentGroupByArgs} args - Group by arguments.
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
      T extends DepartMentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartMentGroupByArgs['orderBy'] }
        : { orderBy?: DepartMentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DepartMentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartMentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartMent model
   */
  readonly fields: DepartMentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartMent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartMentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    headOfDepartment<T extends DepartMent$headOfDepartmentArgs<ExtArgs> = {}>(args?: Subset<T, DepartMent$headOfDepartmentArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departmentalSectors<T extends DepartMent$departmentalSectorsArgs<ExtArgs> = {}>(args?: Subset<T, DepartMent$departmentalSectorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepartMent model
   */
  interface DepartMentFieldRefs {
    readonly id: FieldRef<"DepartMent", 'String'>
    readonly name: FieldRef<"DepartMent", 'String'>
    readonly about: FieldRef<"DepartMent", 'String'>
    readonly headOfDepartmentId: FieldRef<"DepartMent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepartMent findUnique
   */
  export type DepartMentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter, which DepartMent to fetch.
     */
    where: DepartMentWhereUniqueInput
  }

  /**
   * DepartMent findUniqueOrThrow
   */
  export type DepartMentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter, which DepartMent to fetch.
     */
    where: DepartMentWhereUniqueInput
  }

  /**
   * DepartMent findFirst
   */
  export type DepartMentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter, which DepartMent to fetch.
     */
    where?: DepartMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMents to fetch.
     */
    orderBy?: DepartMentOrderByWithRelationInput | DepartMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartMents.
     */
    cursor?: DepartMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartMents.
     */
    distinct?: DepartMentScalarFieldEnum | DepartMentScalarFieldEnum[]
  }

  /**
   * DepartMent findFirstOrThrow
   */
  export type DepartMentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter, which DepartMent to fetch.
     */
    where?: DepartMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMents to fetch.
     */
    orderBy?: DepartMentOrderByWithRelationInput | DepartMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartMents.
     */
    cursor?: DepartMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartMents.
     */
    distinct?: DepartMentScalarFieldEnum | DepartMentScalarFieldEnum[]
  }

  /**
   * DepartMent findMany
   */
  export type DepartMentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter, which DepartMents to fetch.
     */
    where?: DepartMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMents to fetch.
     */
    orderBy?: DepartMentOrderByWithRelationInput | DepartMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartMents.
     */
    cursor?: DepartMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMents.
     */
    skip?: number
    distinct?: DepartMentScalarFieldEnum | DepartMentScalarFieldEnum[]
  }

  /**
   * DepartMent create
   */
  export type DepartMentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartMent.
     */
    data: XOR<DepartMentCreateInput, DepartMentUncheckedCreateInput>
  }

  /**
   * DepartMent createMany
   */
  export type DepartMentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartMents.
     */
    data: DepartMentCreateManyInput | DepartMentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepartMent createManyAndReturn
   */
  export type DepartMentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * The data used to create many DepartMents.
     */
    data: DepartMentCreateManyInput | DepartMentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartMent update
   */
  export type DepartMentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartMent.
     */
    data: XOR<DepartMentUpdateInput, DepartMentUncheckedUpdateInput>
    /**
     * Choose, which DepartMent to update.
     */
    where: DepartMentWhereUniqueInput
  }

  /**
   * DepartMent updateMany
   */
  export type DepartMentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartMents.
     */
    data: XOR<DepartMentUpdateManyMutationInput, DepartMentUncheckedUpdateManyInput>
    /**
     * Filter which DepartMents to update
     */
    where?: DepartMentWhereInput
    /**
     * Limit how many DepartMents to update.
     */
    limit?: number
  }

  /**
   * DepartMent updateManyAndReturn
   */
  export type DepartMentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * The data used to update DepartMents.
     */
    data: XOR<DepartMentUpdateManyMutationInput, DepartMentUncheckedUpdateManyInput>
    /**
     * Filter which DepartMents to update
     */
    where?: DepartMentWhereInput
    /**
     * Limit how many DepartMents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartMent upsert
   */
  export type DepartMentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartMent to update in case it exists.
     */
    where: DepartMentWhereUniqueInput
    /**
     * In case the DepartMent found by the `where` argument doesn't exist, create a new DepartMent with this data.
     */
    create: XOR<DepartMentCreateInput, DepartMentUncheckedCreateInput>
    /**
     * In case the DepartMent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartMentUpdateInput, DepartMentUncheckedUpdateInput>
  }

  /**
   * DepartMent delete
   */
  export type DepartMentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    /**
     * Filter which DepartMent to delete.
     */
    where: DepartMentWhereUniqueInput
  }

  /**
   * DepartMent deleteMany
   */
  export type DepartMentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartMents to delete
     */
    where?: DepartMentWhereInput
    /**
     * Limit how many DepartMents to delete.
     */
    limit?: number
  }

  /**
   * DepartMent.headOfDepartment
   */
  export type DepartMent$headOfDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * DepartMent.departmentalSectors
   */
  export type DepartMent$departmentalSectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    where?: DepartMentalSectorWhereInput
    orderBy?: DepartMentalSectorOrderByWithRelationInput | DepartMentalSectorOrderByWithRelationInput[]
    cursor?: DepartMentalSectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartMentalSectorScalarFieldEnum | DepartMentalSectorScalarFieldEnum[]
  }

  /**
   * DepartMent without action
   */
  export type DepartMentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
  }


  /**
   * Model DepartMentalSector
   */

  export type AggregateDepartMentalSector = {
    _count: DepartMentalSectorCountAggregateOutputType | null
    _avg: DepartMentalSectorAvgAggregateOutputType | null
    _sum: DepartMentalSectorSumAggregateOutputType | null
    _min: DepartMentalSectorMinAggregateOutputType | null
    _max: DepartMentalSectorMaxAggregateOutputType | null
  }

  export type DepartMentalSectorAvgAggregateOutputType = {
    hierarchy: number | null
  }

  export type DepartMentalSectorSumAggregateOutputType = {
    hierarchy: number | null
  }

  export type DepartMentalSectorMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    hierarchy: number | null
    departMentId: string | null
  }

  export type DepartMentalSectorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    hierarchy: number | null
    departMentId: string | null
  }

  export type DepartMentalSectorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    hierarchy: number
    departMentId: number
    _all: number
  }


  export type DepartMentalSectorAvgAggregateInputType = {
    hierarchy?: true
  }

  export type DepartMentalSectorSumAggregateInputType = {
    hierarchy?: true
  }

  export type DepartMentalSectorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hierarchy?: true
    departMentId?: true
  }

  export type DepartMentalSectorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hierarchy?: true
    departMentId?: true
  }

  export type DepartMentalSectorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    hierarchy?: true
    departMentId?: true
    _all?: true
  }

  export type DepartMentalSectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartMentalSector to aggregate.
     */
    where?: DepartMentalSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMentalSectors to fetch.
     */
    orderBy?: DepartMentalSectorOrderByWithRelationInput | DepartMentalSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartMentalSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMentalSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMentalSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartMentalSectors
    **/
    _count?: true | DepartMentalSectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartMentalSectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartMentalSectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartMentalSectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartMentalSectorMaxAggregateInputType
  }

  export type GetDepartMentalSectorAggregateType<T extends DepartMentalSectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartMentalSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartMentalSector[P]>
      : GetScalarType<T[P], AggregateDepartMentalSector[P]>
  }




  export type DepartMentalSectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartMentalSectorWhereInput
    orderBy?: DepartMentalSectorOrderByWithAggregationInput | DepartMentalSectorOrderByWithAggregationInput[]
    by: DepartMentalSectorScalarFieldEnum[] | DepartMentalSectorScalarFieldEnum
    having?: DepartMentalSectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartMentalSectorCountAggregateInputType | true
    _avg?: DepartMentalSectorAvgAggregateInputType
    _sum?: DepartMentalSectorSumAggregateInputType
    _min?: DepartMentalSectorMinAggregateInputType
    _max?: DepartMentalSectorMaxAggregateInputType
  }

  export type DepartMentalSectorGroupByOutputType = {
    id: string
    name: string
    description: string | null
    hierarchy: number
    departMentId: string | null
    _count: DepartMentalSectorCountAggregateOutputType | null
    _avg: DepartMentalSectorAvgAggregateOutputType | null
    _sum: DepartMentalSectorSumAggregateOutputType | null
    _min: DepartMentalSectorMinAggregateOutputType | null
    _max: DepartMentalSectorMaxAggregateOutputType | null
  }

  type GetDepartMentalSectorGroupByPayload<T extends DepartMentalSectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartMentalSectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartMentalSectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartMentalSectorGroupByOutputType[P]>
            : GetScalarType<T[P], DepartMentalSectorGroupByOutputType[P]>
        }
      >
    >


  export type DepartMentalSectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hierarchy?: boolean
    departMentId?: boolean
    employees?: boolean | DepartMentalSector$employeesArgs<ExtArgs>
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
    _count?: boolean | DepartMentalSectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departMentalSector"]>

  export type DepartMentalSectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hierarchy?: boolean
    departMentId?: boolean
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
  }, ExtArgs["result"]["departMentalSector"]>

  export type DepartMentalSectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    hierarchy?: boolean
    departMentId?: boolean
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
  }, ExtArgs["result"]["departMentalSector"]>

  export type DepartMentalSectorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    hierarchy?: boolean
    departMentId?: boolean
  }

  export type DepartMentalSectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "hierarchy" | "departMentId", ExtArgs["result"]["departMentalSector"]>
  export type DepartMentalSectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartMentalSector$employeesArgs<ExtArgs>
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
    _count?: boolean | DepartMentalSectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartMentalSectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
  }
  export type DepartMentalSectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departMent?: boolean | DepartMentalSector$departMentArgs<ExtArgs>
  }

  export type $DepartMentalSectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartMentalSector"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      departMent: Prisma.$DepartMentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      hierarchy: number
      departMentId: string | null
    }, ExtArgs["result"]["departMentalSector"]>
    composites: {}
  }

  type DepartMentalSectorGetPayload<S extends boolean | null | undefined | DepartMentalSectorDefaultArgs> = $Result.GetResult<Prisma.$DepartMentalSectorPayload, S>

  type DepartMentalSectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartMentalSectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartMentalSectorCountAggregateInputType | true
    }

  export interface DepartMentalSectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartMentalSector'], meta: { name: 'DepartMentalSector' } }
    /**
     * Find zero or one DepartMentalSector that matches the filter.
     * @param {DepartMentalSectorFindUniqueArgs} args - Arguments to find a DepartMentalSector
     * @example
     * // Get one DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartMentalSectorFindUniqueArgs>(args: SelectSubset<T, DepartMentalSectorFindUniqueArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepartMentalSector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartMentalSectorFindUniqueOrThrowArgs} args - Arguments to find a DepartMentalSector
     * @example
     * // Get one DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartMentalSectorFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartMentalSectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartMentalSector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorFindFirstArgs} args - Arguments to find a DepartMentalSector
     * @example
     * // Get one DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartMentalSectorFindFirstArgs>(args?: SelectSubset<T, DepartMentalSectorFindFirstArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartMentalSector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorFindFirstOrThrowArgs} args - Arguments to find a DepartMentalSector
     * @example
     * // Get one DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartMentalSectorFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartMentalSectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepartMentalSectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartMentalSectors
     * const departMentalSectors = await prisma.departMentalSector.findMany()
     * 
     * // Get first 10 DepartMentalSectors
     * const departMentalSectors = await prisma.departMentalSector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departMentalSectorWithIdOnly = await prisma.departMentalSector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartMentalSectorFindManyArgs>(args?: SelectSubset<T, DepartMentalSectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepartMentalSector.
     * @param {DepartMentalSectorCreateArgs} args - Arguments to create a DepartMentalSector.
     * @example
     * // Create one DepartMentalSector
     * const DepartMentalSector = await prisma.departMentalSector.create({
     *   data: {
     *     // ... data to create a DepartMentalSector
     *   }
     * })
     * 
     */
    create<T extends DepartMentalSectorCreateArgs>(args: SelectSubset<T, DepartMentalSectorCreateArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepartMentalSectors.
     * @param {DepartMentalSectorCreateManyArgs} args - Arguments to create many DepartMentalSectors.
     * @example
     * // Create many DepartMentalSectors
     * const departMentalSector = await prisma.departMentalSector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartMentalSectorCreateManyArgs>(args?: SelectSubset<T, DepartMentalSectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepartMentalSectors and returns the data saved in the database.
     * @param {DepartMentalSectorCreateManyAndReturnArgs} args - Arguments to create many DepartMentalSectors.
     * @example
     * // Create many DepartMentalSectors
     * const departMentalSector = await prisma.departMentalSector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepartMentalSectors and only return the `id`
     * const departMentalSectorWithIdOnly = await prisma.departMentalSector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartMentalSectorCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartMentalSectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepartMentalSector.
     * @param {DepartMentalSectorDeleteArgs} args - Arguments to delete one DepartMentalSector.
     * @example
     * // Delete one DepartMentalSector
     * const DepartMentalSector = await prisma.departMentalSector.delete({
     *   where: {
     *     // ... filter to delete one DepartMentalSector
     *   }
     * })
     * 
     */
    delete<T extends DepartMentalSectorDeleteArgs>(args: SelectSubset<T, DepartMentalSectorDeleteArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepartMentalSector.
     * @param {DepartMentalSectorUpdateArgs} args - Arguments to update one DepartMentalSector.
     * @example
     * // Update one DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartMentalSectorUpdateArgs>(args: SelectSubset<T, DepartMentalSectorUpdateArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepartMentalSectors.
     * @param {DepartMentalSectorDeleteManyArgs} args - Arguments to filter DepartMentalSectors to delete.
     * @example
     * // Delete a few DepartMentalSectors
     * const { count } = await prisma.departMentalSector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartMentalSectorDeleteManyArgs>(args?: SelectSubset<T, DepartMentalSectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartMentalSectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartMentalSectors
     * const departMentalSector = await prisma.departMentalSector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartMentalSectorUpdateManyArgs>(args: SelectSubset<T, DepartMentalSectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartMentalSectors and returns the data updated in the database.
     * @param {DepartMentalSectorUpdateManyAndReturnArgs} args - Arguments to update many DepartMentalSectors.
     * @example
     * // Update many DepartMentalSectors
     * const departMentalSector = await prisma.departMentalSector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepartMentalSectors and only return the `id`
     * const departMentalSectorWithIdOnly = await prisma.departMentalSector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartMentalSectorUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartMentalSectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepartMentalSector.
     * @param {DepartMentalSectorUpsertArgs} args - Arguments to update or create a DepartMentalSector.
     * @example
     * // Update or create a DepartMentalSector
     * const departMentalSector = await prisma.departMentalSector.upsert({
     *   create: {
     *     // ... data to create a DepartMentalSector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartMentalSector we want to update
     *   }
     * })
     */
    upsert<T extends DepartMentalSectorUpsertArgs>(args: SelectSubset<T, DepartMentalSectorUpsertArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepartMentalSectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorCountArgs} args - Arguments to filter DepartMentalSectors to count.
     * @example
     * // Count the number of DepartMentalSectors
     * const count = await prisma.departMentalSector.count({
     *   where: {
     *     // ... the filter for the DepartMentalSectors we want to count
     *   }
     * })
    **/
    count<T extends DepartMentalSectorCountArgs>(
      args?: Subset<T, DepartMentalSectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartMentalSectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartMentalSector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartMentalSectorAggregateArgs>(args: Subset<T, DepartMentalSectorAggregateArgs>): Prisma.PrismaPromise<GetDepartMentalSectorAggregateType<T>>

    /**
     * Group by DepartMentalSector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartMentalSectorGroupByArgs} args - Group by arguments.
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
      T extends DepartMentalSectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartMentalSectorGroupByArgs['orderBy'] }
        : { orderBy?: DepartMentalSectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DepartMentalSectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartMentalSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartMentalSector model
   */
  readonly fields: DepartMentalSectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartMentalSector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartMentalSectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends DepartMentalSector$employeesArgs<ExtArgs> = {}>(args?: Subset<T, DepartMentalSector$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departMent<T extends DepartMentalSector$departMentArgs<ExtArgs> = {}>(args?: Subset<T, DepartMentalSector$departMentArgs<ExtArgs>>): Prisma__DepartMentClient<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepartMentalSector model
   */
  interface DepartMentalSectorFieldRefs {
    readonly id: FieldRef<"DepartMentalSector", 'String'>
    readonly name: FieldRef<"DepartMentalSector", 'String'>
    readonly description: FieldRef<"DepartMentalSector", 'String'>
    readonly hierarchy: FieldRef<"DepartMentalSector", 'Int'>
    readonly departMentId: FieldRef<"DepartMentalSector", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepartMentalSector findUnique
   */
  export type DepartMentalSectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter, which DepartMentalSector to fetch.
     */
    where: DepartMentalSectorWhereUniqueInput
  }

  /**
   * DepartMentalSector findUniqueOrThrow
   */
  export type DepartMentalSectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter, which DepartMentalSector to fetch.
     */
    where: DepartMentalSectorWhereUniqueInput
  }

  /**
   * DepartMentalSector findFirst
   */
  export type DepartMentalSectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter, which DepartMentalSector to fetch.
     */
    where?: DepartMentalSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMentalSectors to fetch.
     */
    orderBy?: DepartMentalSectorOrderByWithRelationInput | DepartMentalSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartMentalSectors.
     */
    cursor?: DepartMentalSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMentalSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMentalSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartMentalSectors.
     */
    distinct?: DepartMentalSectorScalarFieldEnum | DepartMentalSectorScalarFieldEnum[]
  }

  /**
   * DepartMentalSector findFirstOrThrow
   */
  export type DepartMentalSectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter, which DepartMentalSector to fetch.
     */
    where?: DepartMentalSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMentalSectors to fetch.
     */
    orderBy?: DepartMentalSectorOrderByWithRelationInput | DepartMentalSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartMentalSectors.
     */
    cursor?: DepartMentalSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMentalSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMentalSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartMentalSectors.
     */
    distinct?: DepartMentalSectorScalarFieldEnum | DepartMentalSectorScalarFieldEnum[]
  }

  /**
   * DepartMentalSector findMany
   */
  export type DepartMentalSectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter, which DepartMentalSectors to fetch.
     */
    where?: DepartMentalSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartMentalSectors to fetch.
     */
    orderBy?: DepartMentalSectorOrderByWithRelationInput | DepartMentalSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartMentalSectors.
     */
    cursor?: DepartMentalSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartMentalSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartMentalSectors.
     */
    skip?: number
    distinct?: DepartMentalSectorScalarFieldEnum | DepartMentalSectorScalarFieldEnum[]
  }

  /**
   * DepartMentalSector create
   */
  export type DepartMentalSectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartMentalSector.
     */
    data: XOR<DepartMentalSectorCreateInput, DepartMentalSectorUncheckedCreateInput>
  }

  /**
   * DepartMentalSector createMany
   */
  export type DepartMentalSectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartMentalSectors.
     */
    data: DepartMentalSectorCreateManyInput | DepartMentalSectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepartMentalSector createManyAndReturn
   */
  export type DepartMentalSectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * The data used to create many DepartMentalSectors.
     */
    data: DepartMentalSectorCreateManyInput | DepartMentalSectorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartMentalSector update
   */
  export type DepartMentalSectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartMentalSector.
     */
    data: XOR<DepartMentalSectorUpdateInput, DepartMentalSectorUncheckedUpdateInput>
    /**
     * Choose, which DepartMentalSector to update.
     */
    where: DepartMentalSectorWhereUniqueInput
  }

  /**
   * DepartMentalSector updateMany
   */
  export type DepartMentalSectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartMentalSectors.
     */
    data: XOR<DepartMentalSectorUpdateManyMutationInput, DepartMentalSectorUncheckedUpdateManyInput>
    /**
     * Filter which DepartMentalSectors to update
     */
    where?: DepartMentalSectorWhereInput
    /**
     * Limit how many DepartMentalSectors to update.
     */
    limit?: number
  }

  /**
   * DepartMentalSector updateManyAndReturn
   */
  export type DepartMentalSectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * The data used to update DepartMentalSectors.
     */
    data: XOR<DepartMentalSectorUpdateManyMutationInput, DepartMentalSectorUncheckedUpdateManyInput>
    /**
     * Filter which DepartMentalSectors to update
     */
    where?: DepartMentalSectorWhereInput
    /**
     * Limit how many DepartMentalSectors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartMentalSector upsert
   */
  export type DepartMentalSectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartMentalSector to update in case it exists.
     */
    where: DepartMentalSectorWhereUniqueInput
    /**
     * In case the DepartMentalSector found by the `where` argument doesn't exist, create a new DepartMentalSector with this data.
     */
    create: XOR<DepartMentalSectorCreateInput, DepartMentalSectorUncheckedCreateInput>
    /**
     * In case the DepartMentalSector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartMentalSectorUpdateInput, DepartMentalSectorUncheckedUpdateInput>
  }

  /**
   * DepartMentalSector delete
   */
  export type DepartMentalSectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    /**
     * Filter which DepartMentalSector to delete.
     */
    where: DepartMentalSectorWhereUniqueInput
  }

  /**
   * DepartMentalSector deleteMany
   */
  export type DepartMentalSectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartMentalSectors to delete
     */
    where?: DepartMentalSectorWhereInput
    /**
     * Limit how many DepartMentalSectors to delete.
     */
    limit?: number
  }

  /**
   * DepartMentalSector.employees
   */
  export type DepartMentalSector$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * DepartMentalSector.departMent
   */
  export type DepartMentalSector$departMentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    where?: DepartMentWhereInput
  }

  /**
   * DepartMentalSector without action
   */
  export type DepartMentalSectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    assumedOffice: number | null
    endedOffice: number | null
    hierarchy: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    assumedOffice: number | null
    endedOffice: number | null
    hierarchy: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    assumedOffice: number | null
    endedOffice: number | null
    position: string | null
    hierarchy: number | null
    shortMessageToPublic: string | null
    departMentalSectorId: string | null
    userId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    assumedOffice: number | null
    endedOffice: number | null
    position: string | null
    hierarchy: number | null
    shortMessageToPublic: string | null
    departMentalSectorId: string | null
    userId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    assumedOffice: number
    endedOffice: number
    position: number
    hierarchy: number
    shortMessageToPublic: number
    departMentalSectorId: number
    userId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    assumedOffice?: true
    endedOffice?: true
    hierarchy?: true
  }

  export type EmployeeSumAggregateInputType = {
    assumedOffice?: true
    endedOffice?: true
    hierarchy?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    assumedOffice?: true
    endedOffice?: true
    position?: true
    hierarchy?: true
    shortMessageToPublic?: true
    departMentalSectorId?: true
    userId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    assumedOffice?: true
    endedOffice?: true
    position?: true
    hierarchy?: true
    shortMessageToPublic?: true
    departMentalSectorId?: true
    userId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    assumedOffice?: true
    endedOffice?: true
    position?: true
    hierarchy?: true
    shortMessageToPublic?: true
    departMentalSectorId?: true
    userId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    assumedOffice: number
    endedOffice: number | null
    position: string
    hierarchy: number
    shortMessageToPublic: string | null
    departMentalSectorId: string | null
    userId: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assumedOffice?: boolean
    endedOffice?: boolean
    position?: boolean
    hierarchy?: boolean
    shortMessageToPublic?: boolean
    departMentalSectorId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMents?: boolean | Employee$departMentsArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assumedOffice?: boolean
    endedOffice?: boolean
    position?: boolean
    hierarchy?: boolean
    shortMessageToPublic?: boolean
    departMentalSectorId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assumedOffice?: boolean
    endedOffice?: boolean
    position?: boolean
    hierarchy?: boolean
    shortMessageToPublic?: boolean
    departMentalSectorId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    assumedOffice?: boolean
    endedOffice?: boolean
    position?: boolean
    hierarchy?: boolean
    shortMessageToPublic?: boolean
    departMentalSectorId?: boolean
    userId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assumedOffice" | "endedOffice" | "position" | "hierarchy" | "shortMessageToPublic" | "departMentalSectorId" | "userId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMents?: boolean | Employee$departMentsArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    departMentalSector?: boolean | Employee$departMentalSectorArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      departMents: Prisma.$DepartMentPayload<ExtArgs>[]
      departMentalSector: Prisma.$DepartMentalSectorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assumedOffice: number
      endedOffice: number | null
      position: string
      hierarchy: number
      shortMessageToPublic: string | null
      departMentalSectorId: string | null
      userId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departMents<T extends Employee$departMentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departMentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartMentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departMentalSector<T extends Employee$departMentalSectorArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departMentalSectorArgs<ExtArgs>>): Prisma__DepartMentalSectorClient<$Result.GetResult<Prisma.$DepartMentalSectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly assumedOffice: FieldRef<"Employee", 'Int'>
    readonly endedOffice: FieldRef<"Employee", 'Int'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly hierarchy: FieldRef<"Employee", 'Int'>
    readonly shortMessageToPublic: FieldRef<"Employee", 'String'>
    readonly departMentalSectorId: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.departMents
   */
  export type Employee$departMentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMent
     */
    select?: DepartMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMent
     */
    omit?: DepartMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentInclude<ExtArgs> | null
    where?: DepartMentWhereInput
    orderBy?: DepartMentOrderByWithRelationInput | DepartMentOrderByWithRelationInput[]
    cursor?: DepartMentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartMentScalarFieldEnum | DepartMentScalarFieldEnum[]
  }

  /**
   * Employee.departMentalSector
   */
  export type Employee$departMentalSectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartMentalSector
     */
    select?: DepartMentalSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartMentalSector
     */
    omit?: DepartMentalSectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartMentalSectorInclude<ExtArgs> | null
    where?: DepartMentalSectorWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenAvgAggregateOutputType = {
    expires: number | null
  }

  export type EmailVerificationTokenSumAggregateOutputType = {
    expires: bigint | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: bigint | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: bigint | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    _all: number
  }


  export type EmailVerificationTokenAvgAggregateInputType = {
    expires?: true
  }

  export type EmailVerificationTokenSumAggregateInputType = {
    expires?: true
  }

  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _avg?: EmailVerificationTokenAvgAggregateInputType
    _sum?: EmailVerificationTokenSumAggregateInputType
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    userId: string
    expires: bigint
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expires", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expires: bigint
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
    readonly expires: FieldRef<"EmailVerificationToken", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    role: $Enums.Role | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    role: $Enums.Role | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    role: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    role?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    role?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    role?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    role: $Enums.Role
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    role?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "role", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly role: FieldRef<"Session", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model NewsLetterSubscription
   */

  export type AggregateNewsLetterSubscription = {
    _count: NewsLetterSubscriptionCountAggregateOutputType | null
    _min: NewsLetterSubscriptionMinAggregateOutputType | null
    _max: NewsLetterSubscriptionMaxAggregateOutputType | null
  }

  export type NewsLetterSubscriptionMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type NewsLetterSubscriptionMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type NewsLetterSubscriptionCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    _all: number
  }


  export type NewsLetterSubscriptionMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type NewsLetterSubscriptionMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type NewsLetterSubscriptionCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type NewsLetterSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetterSubscription to aggregate.
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionOrderByWithRelationInput | NewsLetterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsLetterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsLetterSubscriptions
    **/
    _count?: true | NewsLetterSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsLetterSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsLetterSubscriptionMaxAggregateInputType
  }

  export type GetNewsLetterSubscriptionAggregateType<T extends NewsLetterSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsLetterSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsLetterSubscription[P]>
      : GetScalarType<T[P], AggregateNewsLetterSubscription[P]>
  }




  export type NewsLetterSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLetterSubscriptionWhereInput
    orderBy?: NewsLetterSubscriptionOrderByWithAggregationInput | NewsLetterSubscriptionOrderByWithAggregationInput[]
    by: NewsLetterSubscriptionScalarFieldEnum[] | NewsLetterSubscriptionScalarFieldEnum
    having?: NewsLetterSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsLetterSubscriptionCountAggregateInputType | true
    _min?: NewsLetterSubscriptionMinAggregateInputType
    _max?: NewsLetterSubscriptionMaxAggregateInputType
  }

  export type NewsLetterSubscriptionGroupByOutputType = {
    id: string
    email: string
    name: string
    createdAt: Date
    _count: NewsLetterSubscriptionCountAggregateOutputType | null
    _min: NewsLetterSubscriptionMinAggregateOutputType | null
    _max: NewsLetterSubscriptionMaxAggregateOutputType | null
  }

  type GetNewsLetterSubscriptionGroupByPayload<T extends NewsLetterSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsLetterSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsLetterSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsLetterSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], NewsLetterSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type NewsLetterSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscription"]>

  export type NewsLetterSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscription"]>

  export type NewsLetterSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscription"]>

  export type NewsLetterSubscriptionSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type NewsLetterSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt", ExtArgs["result"]["newsLetterSubscription"]>

  export type $NewsLetterSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsLetterSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["newsLetterSubscription"]>
    composites: {}
  }

  type NewsLetterSubscriptionGetPayload<S extends boolean | null | undefined | NewsLetterSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$NewsLetterSubscriptionPayload, S>

  type NewsLetterSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsLetterSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsLetterSubscriptionCountAggregateInputType | true
    }

  export interface NewsLetterSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsLetterSubscription'], meta: { name: 'NewsLetterSubscription' } }
    /**
     * Find zero or one NewsLetterSubscription that matches the filter.
     * @param {NewsLetterSubscriptionFindUniqueArgs} args - Arguments to find a NewsLetterSubscription
     * @example
     * // Get one NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsLetterSubscriptionFindUniqueArgs>(args: SelectSubset<T, NewsLetterSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsLetterSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsLetterSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a NewsLetterSubscription
     * @example
     * // Get one NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsLetterSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsLetterSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetterSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionFindFirstArgs} args - Arguments to find a NewsLetterSubscription
     * @example
     * // Get one NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsLetterSubscriptionFindFirstArgs>(args?: SelectSubset<T, NewsLetterSubscriptionFindFirstArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetterSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionFindFirstOrThrowArgs} args - Arguments to find a NewsLetterSubscription
     * @example
     * // Get one NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsLetterSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsLetterSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsLetterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscription.findMany()
     * 
     * // Get first 10 NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsLetterSubscriptionWithIdOnly = await prisma.newsLetterSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsLetterSubscriptionFindManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsLetterSubscription.
     * @param {NewsLetterSubscriptionCreateArgs} args - Arguments to create a NewsLetterSubscription.
     * @example
     * // Create one NewsLetterSubscription
     * const NewsLetterSubscription = await prisma.newsLetterSubscription.create({
     *   data: {
     *     // ... data to create a NewsLetterSubscription
     *   }
     * })
     * 
     */
    create<T extends NewsLetterSubscriptionCreateArgs>(args: SelectSubset<T, NewsLetterSubscriptionCreateArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionCreateManyArgs} args - Arguments to create many NewsLetterSubscriptions.
     * @example
     * // Create many NewsLetterSubscriptions
     * const newsLetterSubscription = await prisma.newsLetterSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsLetterSubscriptionCreateManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsLetterSubscriptions and returns the data saved in the database.
     * @param {NewsLetterSubscriptionCreateManyAndReturnArgs} args - Arguments to create many NewsLetterSubscriptions.
     * @example
     * // Create many NewsLetterSubscriptions
     * const newsLetterSubscription = await prisma.newsLetterSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsLetterSubscriptions and only return the `id`
     * const newsLetterSubscriptionWithIdOnly = await prisma.newsLetterSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsLetterSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsLetterSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsLetterSubscription.
     * @param {NewsLetterSubscriptionDeleteArgs} args - Arguments to delete one NewsLetterSubscription.
     * @example
     * // Delete one NewsLetterSubscription
     * const NewsLetterSubscription = await prisma.newsLetterSubscription.delete({
     *   where: {
     *     // ... filter to delete one NewsLetterSubscription
     *   }
     * })
     * 
     */
    delete<T extends NewsLetterSubscriptionDeleteArgs>(args: SelectSubset<T, NewsLetterSubscriptionDeleteArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsLetterSubscription.
     * @param {NewsLetterSubscriptionUpdateArgs} args - Arguments to update one NewsLetterSubscription.
     * @example
     * // Update one NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsLetterSubscriptionUpdateArgs>(args: SelectSubset<T, NewsLetterSubscriptionUpdateArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionDeleteManyArgs} args - Arguments to filter NewsLetterSubscriptions to delete.
     * @example
     * // Delete a few NewsLetterSubscriptions
     * const { count } = await prisma.newsLetterSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsLetterSubscriptionDeleteManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsLetterSubscriptions
     * const newsLetterSubscription = await prisma.newsLetterSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsLetterSubscriptionUpdateManyArgs>(args: SelectSubset<T, NewsLetterSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetterSubscriptions and returns the data updated in the database.
     * @param {NewsLetterSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many NewsLetterSubscriptions.
     * @example
     * // Update many NewsLetterSubscriptions
     * const newsLetterSubscription = await prisma.newsLetterSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsLetterSubscriptions and only return the `id`
     * const newsLetterSubscriptionWithIdOnly = await prisma.newsLetterSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsLetterSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsLetterSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsLetterSubscription.
     * @param {NewsLetterSubscriptionUpsertArgs} args - Arguments to update or create a NewsLetterSubscription.
     * @example
     * // Update or create a NewsLetterSubscription
     * const newsLetterSubscription = await prisma.newsLetterSubscription.upsert({
     *   create: {
     *     // ... data to create a NewsLetterSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsLetterSubscription we want to update
     *   }
     * })
     */
    upsert<T extends NewsLetterSubscriptionUpsertArgs>(args: SelectSubset<T, NewsLetterSubscriptionUpsertArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionCountArgs} args - Arguments to filter NewsLetterSubscriptions to count.
     * @example
     * // Count the number of NewsLetterSubscriptions
     * const count = await prisma.newsLetterSubscription.count({
     *   where: {
     *     // ... the filter for the NewsLetterSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NewsLetterSubscriptionCountArgs>(
      args?: Subset<T, NewsLetterSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsLetterSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsLetterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsLetterSubscriptionAggregateArgs>(args: Subset<T, NewsLetterSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetNewsLetterSubscriptionAggregateType<T>>

    /**
     * Group by NewsLetterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends NewsLetterSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsLetterSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: NewsLetterSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsLetterSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsLetterSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsLetterSubscription model
   */
  readonly fields: NewsLetterSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsLetterSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsLetterSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsLetterSubscription model
   */
  interface NewsLetterSubscriptionFieldRefs {
    readonly id: FieldRef<"NewsLetterSubscription", 'String'>
    readonly email: FieldRef<"NewsLetterSubscription", 'String'>
    readonly name: FieldRef<"NewsLetterSubscription", 'String'>
    readonly createdAt: FieldRef<"NewsLetterSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsLetterSubscription findUnique
   */
  export type NewsLetterSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscription to fetch.
     */
    where: NewsLetterSubscriptionWhereUniqueInput
  }

  /**
   * NewsLetterSubscription findUniqueOrThrow
   */
  export type NewsLetterSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscription to fetch.
     */
    where: NewsLetterSubscriptionWhereUniqueInput
  }

  /**
   * NewsLetterSubscription findFirst
   */
  export type NewsLetterSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscription to fetch.
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionOrderByWithRelationInput | NewsLetterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetterSubscriptions.
     */
    distinct?: NewsLetterSubscriptionScalarFieldEnum | NewsLetterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscription findFirstOrThrow
   */
  export type NewsLetterSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscription to fetch.
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionOrderByWithRelationInput | NewsLetterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetterSubscriptions.
     */
    distinct?: NewsLetterSubscriptionScalarFieldEnum | NewsLetterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscription findMany
   */
  export type NewsLetterSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionOrderByWithRelationInput | NewsLetterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    distinct?: NewsLetterSubscriptionScalarFieldEnum | NewsLetterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscription create
   */
  export type NewsLetterSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsLetterSubscription.
     */
    data: XOR<NewsLetterSubscriptionCreateInput, NewsLetterSubscriptionUncheckedCreateInput>
  }

  /**
   * NewsLetterSubscription createMany
   */
  export type NewsLetterSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsLetterSubscriptions.
     */
    data: NewsLetterSubscriptionCreateManyInput | NewsLetterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetterSubscription createManyAndReturn
   */
  export type NewsLetterSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many NewsLetterSubscriptions.
     */
    data: NewsLetterSubscriptionCreateManyInput | NewsLetterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetterSubscription update
   */
  export type NewsLetterSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsLetterSubscription.
     */
    data: XOR<NewsLetterSubscriptionUpdateInput, NewsLetterSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which NewsLetterSubscription to update.
     */
    where: NewsLetterSubscriptionWhereUniqueInput
  }

  /**
   * NewsLetterSubscription updateMany
   */
  export type NewsLetterSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionUpdateManyMutationInput, NewsLetterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetterSubscriptions to update
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscription updateManyAndReturn
   */
  export type NewsLetterSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionUpdateManyMutationInput, NewsLetterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetterSubscriptions to update
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscription upsert
   */
  export type NewsLetterSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsLetterSubscription to update in case it exists.
     */
    where: NewsLetterSubscriptionWhereUniqueInput
    /**
     * In case the NewsLetterSubscription found by the `where` argument doesn't exist, create a new NewsLetterSubscription with this data.
     */
    create: XOR<NewsLetterSubscriptionCreateInput, NewsLetterSubscriptionUncheckedCreateInput>
    /**
     * In case the NewsLetterSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsLetterSubscriptionUpdateInput, NewsLetterSubscriptionUncheckedUpdateInput>
  }

  /**
   * NewsLetterSubscription delete
   */
  export type NewsLetterSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter which NewsLetterSubscription to delete.
     */
    where: NewsLetterSubscriptionWhereUniqueInput
  }

  /**
   * NewsLetterSubscription deleteMany
   */
  export type NewsLetterSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetterSubscriptions to delete
     */
    where?: NewsLetterSubscriptionWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscription without action
   */
  export type NewsLetterSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscription
     */
    select?: NewsLetterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscription
     */
    omit?: NewsLetterSubscriptionOmit<ExtArgs> | null
  }


  /**
   * Model NewsLetter
   */

  export type AggregateNewsLetter = {
    _count: NewsLetterCountAggregateOutputType | null
    _min: NewsLetterMinAggregateOutputType | null
    _max: NewsLetterMaxAggregateOutputType | null
  }

  export type NewsLetterMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type NewsLetterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type NewsLetterCountAggregateOutputType = {
    id: number
    title: number
    content: number
    description: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type NewsLetterMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type NewsLetterMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type NewsLetterCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type NewsLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetter to aggregate.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsLetters
    **/
    _count?: true | NewsLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsLetterMaxAggregateInputType
  }

  export type GetNewsLetterAggregateType<T extends NewsLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsLetter[P]>
      : GetScalarType<T[P], AggregateNewsLetter[P]>
  }




  export type NewsLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLetterWhereInput
    orderBy?: NewsLetterOrderByWithAggregationInput | NewsLetterOrderByWithAggregationInput[]
    by: NewsLetterScalarFieldEnum[] | NewsLetterScalarFieldEnum
    having?: NewsLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsLetterCountAggregateInputType | true
    _min?: NewsLetterMinAggregateInputType
    _max?: NewsLetterMaxAggregateInputType
  }

  export type NewsLetterGroupByOutputType = {
    id: string
    title: string
    content: string
    description: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: NewsLetterCountAggregateOutputType | null
    _min: NewsLetterMinAggregateOutputType | null
    _max: NewsLetterMaxAggregateOutputType | null
  }

  type GetNewsLetterGroupByPayload<T extends NewsLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsLetterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsLetterGroupByOutputType[P]>
        }
      >
    >


  export type NewsLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type NewsLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "description" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["newsLetter"]>
  export type NewsLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsLetter"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      description: string
      createdAt: Date
      updatedAt: Date
      authorId: string
    }, ExtArgs["result"]["newsLetter"]>
    composites: {}
  }

  type NewsLetterGetPayload<S extends boolean | null | undefined | NewsLetterDefaultArgs> = $Result.GetResult<Prisma.$NewsLetterPayload, S>

  type NewsLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsLetterCountAggregateInputType | true
    }

  export interface NewsLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsLetter'], meta: { name: 'NewsLetter' } }
    /**
     * Find zero or one NewsLetter that matches the filter.
     * @param {NewsLetterFindUniqueArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsLetterFindUniqueArgs>(args: SelectSubset<T, NewsLetterFindUniqueArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsLetterFindUniqueOrThrowArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindFirstArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsLetterFindFirstArgs>(args?: SelectSubset<T, NewsLetterFindFirstArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindFirstOrThrowArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsLetters
     * const newsLetters = await prisma.newsLetter.findMany()
     * 
     * // Get first 10 NewsLetters
     * const newsLetters = await prisma.newsLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsLetterFindManyArgs>(args?: SelectSubset<T, NewsLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsLetter.
     * @param {NewsLetterCreateArgs} args - Arguments to create a NewsLetter.
     * @example
     * // Create one NewsLetter
     * const NewsLetter = await prisma.newsLetter.create({
     *   data: {
     *     // ... data to create a NewsLetter
     *   }
     * })
     * 
     */
    create<T extends NewsLetterCreateArgs>(args: SelectSubset<T, NewsLetterCreateArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsLetters.
     * @param {NewsLetterCreateManyArgs} args - Arguments to create many NewsLetters.
     * @example
     * // Create many NewsLetters
     * const newsLetter = await prisma.newsLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsLetterCreateManyArgs>(args?: SelectSubset<T, NewsLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsLetters and returns the data saved in the database.
     * @param {NewsLetterCreateManyAndReturnArgs} args - Arguments to create many NewsLetters.
     * @example
     * // Create many NewsLetters
     * const newsLetter = await prisma.newsLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsLetters and only return the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsLetter.
     * @param {NewsLetterDeleteArgs} args - Arguments to delete one NewsLetter.
     * @example
     * // Delete one NewsLetter
     * const NewsLetter = await prisma.newsLetter.delete({
     *   where: {
     *     // ... filter to delete one NewsLetter
     *   }
     * })
     * 
     */
    delete<T extends NewsLetterDeleteArgs>(args: SelectSubset<T, NewsLetterDeleteArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsLetter.
     * @param {NewsLetterUpdateArgs} args - Arguments to update one NewsLetter.
     * @example
     * // Update one NewsLetter
     * const newsLetter = await prisma.newsLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsLetterUpdateArgs>(args: SelectSubset<T, NewsLetterUpdateArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsLetters.
     * @param {NewsLetterDeleteManyArgs} args - Arguments to filter NewsLetters to delete.
     * @example
     * // Delete a few NewsLetters
     * const { count } = await prisma.newsLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsLetterDeleteManyArgs>(args?: SelectSubset<T, NewsLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsLetters
     * const newsLetter = await prisma.newsLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsLetterUpdateManyArgs>(args: SelectSubset<T, NewsLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetters and returns the data updated in the database.
     * @param {NewsLetterUpdateManyAndReturnArgs} args - Arguments to update many NewsLetters.
     * @example
     * // Update many NewsLetters
     * const newsLetter = await prisma.newsLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsLetters and only return the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsLetter.
     * @param {NewsLetterUpsertArgs} args - Arguments to update or create a NewsLetter.
     * @example
     * // Update or create a NewsLetter
     * const newsLetter = await prisma.newsLetter.upsert({
     *   create: {
     *     // ... data to create a NewsLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsLetter we want to update
     *   }
     * })
     */
    upsert<T extends NewsLetterUpsertArgs>(args: SelectSubset<T, NewsLetterUpsertArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterCountArgs} args - Arguments to filter NewsLetters to count.
     * @example
     * // Count the number of NewsLetters
     * const count = await prisma.newsLetter.count({
     *   where: {
     *     // ... the filter for the NewsLetters we want to count
     *   }
     * })
    **/
    count<T extends NewsLetterCountArgs>(
      args?: Subset<T, NewsLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsLetterAggregateArgs>(args: Subset<T, NewsLetterAggregateArgs>): Prisma.PrismaPromise<GetNewsLetterAggregateType<T>>

    /**
     * Group by NewsLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterGroupByArgs} args - Group by arguments.
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
      T extends NewsLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsLetterGroupByArgs['orderBy'] }
        : { orderBy?: NewsLetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsLetter model
   */
  readonly fields: NewsLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsLetter model
   */
  interface NewsLetterFieldRefs {
    readonly id: FieldRef<"NewsLetter", 'String'>
    readonly title: FieldRef<"NewsLetter", 'String'>
    readonly content: FieldRef<"NewsLetter", 'String'>
    readonly description: FieldRef<"NewsLetter", 'String'>
    readonly createdAt: FieldRef<"NewsLetter", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsLetter", 'DateTime'>
    readonly authorId: FieldRef<"NewsLetter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsLetter findUnique
   */
  export type NewsLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter findUniqueOrThrow
   */
  export type NewsLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter findFirst
   */
  export type NewsLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetters.
     */
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter findFirstOrThrow
   */
  export type NewsLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetters.
     */
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter findMany
   */
  export type NewsLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter, which NewsLetters to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter create
   */
  export type NewsLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsLetter.
     */
    data: XOR<NewsLetterCreateInput, NewsLetterUncheckedCreateInput>
  }

  /**
   * NewsLetter createMany
   */
  export type NewsLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsLetters.
     */
    data: NewsLetterCreateManyInput | NewsLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetter createManyAndReturn
   */
  export type NewsLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data used to create many NewsLetters.
     */
    data: NewsLetterCreateManyInput | NewsLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsLetter update
   */
  export type NewsLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsLetter.
     */
    data: XOR<NewsLetterUpdateInput, NewsLetterUncheckedUpdateInput>
    /**
     * Choose, which NewsLetter to update.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter updateMany
   */
  export type NewsLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsLetters.
     */
    data: XOR<NewsLetterUpdateManyMutationInput, NewsLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetters to update
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to update.
     */
    limit?: number
  }

  /**
   * NewsLetter updateManyAndReturn
   */
  export type NewsLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data used to update NewsLetters.
     */
    data: XOR<NewsLetterUpdateManyMutationInput, NewsLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetters to update
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsLetter upsert
   */
  export type NewsLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsLetter to update in case it exists.
     */
    where: NewsLetterWhereUniqueInput
    /**
     * In case the NewsLetter found by the `where` argument doesn't exist, create a new NewsLetter with this data.
     */
    create: XOR<NewsLetterCreateInput, NewsLetterUncheckedCreateInput>
    /**
     * In case the NewsLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsLetterUpdateInput, NewsLetterUncheckedUpdateInput>
  }

  /**
   * NewsLetter delete
   */
  export type NewsLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
    /**
     * Filter which NewsLetter to delete.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter deleteMany
   */
  export type NewsLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetters to delete
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to delete.
     */
    limit?: number
  }

  /**
   * NewsLetter without action
   */
  export type NewsLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsLetterInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    title: string | null
    publishedAt: Date | null
    content: string | null
    authorId: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    title: string | null
    publishedAt: Date | null
    content: string | null
    authorId: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    imageUrl: number
    title: number
    publishedAt: number
    content: number
    authorId: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    publishedAt?: true
    content?: true
    authorId?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    publishedAt?: true
    content?: true
    authorId?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    publishedAt?: true
    content?: true
    authorId?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    imageUrl: string | null
    title: string
    publishedAt: Date
    content: string
    authorId: string
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    publishedAt?: boolean
    content?: boolean
    authorId?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    newsComments?: boolean | NewsArticle$newsCommentsArgs<ExtArgs>
    newsArticleLikes?: boolean | NewsArticle$newsArticleLikesArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    publishedAt?: boolean
    content?: boolean
    authorId?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    publishedAt?: boolean
    content?: boolean
    authorId?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    publishedAt?: boolean
    content?: boolean
    authorId?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "title" | "publishedAt" | "content" | "authorId" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    newsComments?: boolean | NewsArticle$newsCommentsArgs<ExtArgs>
    newsArticleLikes?: boolean | NewsArticle$newsArticleLikesArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      newsComments: Prisma.$NewsCommentPayload<ExtArgs>[]
      newsArticleLikes: Prisma.$NewsArticleLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string | null
      title: string
      publishedAt: Date
      content: string
      authorId: string
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    newsComments<T extends NewsArticle$newsCommentsArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$newsCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsArticleLikes<T extends NewsArticle$newsArticleLikesArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$newsArticleLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly imageUrl: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly authorId: FieldRef<"NewsArticle", 'String'>
    readonly location: FieldRef<"NewsArticle", 'String'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.newsComments
   */
  export type NewsArticle$newsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    where?: NewsCommentWhereInput
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    cursor?: NewsCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsCommentScalarFieldEnum | NewsCommentScalarFieldEnum[]
  }

  /**
   * NewsArticle.newsArticleLikes
   */
  export type NewsArticle$newsArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    where?: NewsArticleLikeWhereInput
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    cursor?: NewsArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleLikeScalarFieldEnum | NewsArticleLikeScalarFieldEnum[]
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model NewsComment
   */

  export type AggregateNewsComment = {
    _count: NewsCommentCountAggregateOutputType | null
    _min: NewsCommentMinAggregateOutputType | null
    _max: NewsCommentMaxAggregateOutputType | null
  }

  export type NewsCommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    commenterId: string | null
    newsArticleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    commenterId: string | null
    newsArticleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCommentCountAggregateOutputType = {
    id: number
    content: number
    commenterId: number
    newsArticleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsCommentMinAggregateInputType = {
    id?: true
    content?: true
    commenterId?: true
    newsArticleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCommentMaxAggregateInputType = {
    id?: true
    content?: true
    commenterId?: true
    newsArticleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCommentCountAggregateInputType = {
    id?: true
    content?: true
    commenterId?: true
    newsArticleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsComment to aggregate.
     */
    where?: NewsCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsComments to fetch.
     */
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsComments
    **/
    _count?: true | NewsCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCommentMaxAggregateInputType
  }

  export type GetNewsCommentAggregateType<T extends NewsCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsComment[P]>
      : GetScalarType<T[P], AggregateNewsComment[P]>
  }




  export type NewsCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCommentWhereInput
    orderBy?: NewsCommentOrderByWithAggregationInput | NewsCommentOrderByWithAggregationInput[]
    by: NewsCommentScalarFieldEnum[] | NewsCommentScalarFieldEnum
    having?: NewsCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCommentCountAggregateInputType | true
    _min?: NewsCommentMinAggregateInputType
    _max?: NewsCommentMaxAggregateInputType
  }

  export type NewsCommentGroupByOutputType = {
    id: string
    content: string
    commenterId: string
    newsArticleId: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCommentCountAggregateOutputType | null
    _min: NewsCommentMinAggregateOutputType | null
    _max: NewsCommentMaxAggregateOutputType | null
  }

  type GetNewsCommentGroupByPayload<T extends NewsCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCommentGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCommentGroupByOutputType[P]>
        }
      >
    >


  export type NewsCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    commenterId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsComment"]>

  export type NewsCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    commenterId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsComment"]>

  export type NewsCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    commenterId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsComment"]>

  export type NewsCommentSelectScalar = {
    id?: boolean
    content?: boolean
    commenterId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "commenterId" | "newsArticleId" | "createdAt" | "updatedAt", ExtArgs["result"]["newsComment"]>
  export type NewsCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commenter?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }

  export type $NewsCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsComment"
    objects: {
      commenter: Prisma.$UserPayload<ExtArgs>
      newsArticle: Prisma.$NewsArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      commenterId: string
      newsArticleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsComment"]>
    composites: {}
  }

  type NewsCommentGetPayload<S extends boolean | null | undefined | NewsCommentDefaultArgs> = $Result.GetResult<Prisma.$NewsCommentPayload, S>

  type NewsCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCommentCountAggregateInputType | true
    }

  export interface NewsCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsComment'], meta: { name: 'NewsComment' } }
    /**
     * Find zero or one NewsComment that matches the filter.
     * @param {NewsCommentFindUniqueArgs} args - Arguments to find a NewsComment
     * @example
     * // Get one NewsComment
     * const newsComment = await prisma.newsComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCommentFindUniqueArgs>(args: SelectSubset<T, NewsCommentFindUniqueArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsCommentFindUniqueOrThrowArgs} args - Arguments to find a NewsComment
     * @example
     * // Get one NewsComment
     * const newsComment = await prisma.newsComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentFindFirstArgs} args - Arguments to find a NewsComment
     * @example
     * // Get one NewsComment
     * const newsComment = await prisma.newsComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCommentFindFirstArgs>(args?: SelectSubset<T, NewsCommentFindFirstArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentFindFirstOrThrowArgs} args - Arguments to find a NewsComment
     * @example
     * // Get one NewsComment
     * const newsComment = await prisma.newsComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsComments
     * const newsComments = await prisma.newsComment.findMany()
     * 
     * // Get first 10 NewsComments
     * const newsComments = await prisma.newsComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsCommentWithIdOnly = await prisma.newsComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsCommentFindManyArgs>(args?: SelectSubset<T, NewsCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsComment.
     * @param {NewsCommentCreateArgs} args - Arguments to create a NewsComment.
     * @example
     * // Create one NewsComment
     * const NewsComment = await prisma.newsComment.create({
     *   data: {
     *     // ... data to create a NewsComment
     *   }
     * })
     * 
     */
    create<T extends NewsCommentCreateArgs>(args: SelectSubset<T, NewsCommentCreateArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsComments.
     * @param {NewsCommentCreateManyArgs} args - Arguments to create many NewsComments.
     * @example
     * // Create many NewsComments
     * const newsComment = await prisma.newsComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCommentCreateManyArgs>(args?: SelectSubset<T, NewsCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsComments and returns the data saved in the database.
     * @param {NewsCommentCreateManyAndReturnArgs} args - Arguments to create many NewsComments.
     * @example
     * // Create many NewsComments
     * const newsComment = await prisma.newsComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsComments and only return the `id`
     * const newsCommentWithIdOnly = await prisma.newsComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsComment.
     * @param {NewsCommentDeleteArgs} args - Arguments to delete one NewsComment.
     * @example
     * // Delete one NewsComment
     * const NewsComment = await prisma.newsComment.delete({
     *   where: {
     *     // ... filter to delete one NewsComment
     *   }
     * })
     * 
     */
    delete<T extends NewsCommentDeleteArgs>(args: SelectSubset<T, NewsCommentDeleteArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsComment.
     * @param {NewsCommentUpdateArgs} args - Arguments to update one NewsComment.
     * @example
     * // Update one NewsComment
     * const newsComment = await prisma.newsComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCommentUpdateArgs>(args: SelectSubset<T, NewsCommentUpdateArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsComments.
     * @param {NewsCommentDeleteManyArgs} args - Arguments to filter NewsComments to delete.
     * @example
     * // Delete a few NewsComments
     * const { count } = await prisma.newsComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCommentDeleteManyArgs>(args?: SelectSubset<T, NewsCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsComments
     * const newsComment = await prisma.newsComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCommentUpdateManyArgs>(args: SelectSubset<T, NewsCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsComments and returns the data updated in the database.
     * @param {NewsCommentUpdateManyAndReturnArgs} args - Arguments to update many NewsComments.
     * @example
     * // Update many NewsComments
     * const newsComment = await prisma.newsComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsComments and only return the `id`
     * const newsCommentWithIdOnly = await prisma.newsComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsComment.
     * @param {NewsCommentUpsertArgs} args - Arguments to update or create a NewsComment.
     * @example
     * // Update or create a NewsComment
     * const newsComment = await prisma.newsComment.upsert({
     *   create: {
     *     // ... data to create a NewsComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsComment we want to update
     *   }
     * })
     */
    upsert<T extends NewsCommentUpsertArgs>(args: SelectSubset<T, NewsCommentUpsertArgs<ExtArgs>>): Prisma__NewsCommentClient<$Result.GetResult<Prisma.$NewsCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentCountArgs} args - Arguments to filter NewsComments to count.
     * @example
     * // Count the number of NewsComments
     * const count = await prisma.newsComment.count({
     *   where: {
     *     // ... the filter for the NewsComments we want to count
     *   }
     * })
    **/
    count<T extends NewsCommentCountArgs>(
      args?: Subset<T, NewsCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsCommentAggregateArgs>(args: Subset<T, NewsCommentAggregateArgs>): Prisma.PrismaPromise<GetNewsCommentAggregateType<T>>

    /**
     * Group by NewsComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCommentGroupByArgs} args - Group by arguments.
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
      T extends NewsCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCommentGroupByArgs['orderBy'] }
        : { orderBy?: NewsCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsComment model
   */
  readonly fields: NewsCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commenter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    newsArticle<T extends NewsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticleDefaultArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsComment model
   */
  interface NewsCommentFieldRefs {
    readonly id: FieldRef<"NewsComment", 'String'>
    readonly content: FieldRef<"NewsComment", 'String'>
    readonly commenterId: FieldRef<"NewsComment", 'String'>
    readonly newsArticleId: FieldRef<"NewsComment", 'String'>
    readonly createdAt: FieldRef<"NewsComment", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsComment findUnique
   */
  export type NewsCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter, which NewsComment to fetch.
     */
    where: NewsCommentWhereUniqueInput
  }

  /**
   * NewsComment findUniqueOrThrow
   */
  export type NewsCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter, which NewsComment to fetch.
     */
    where: NewsCommentWhereUniqueInput
  }

  /**
   * NewsComment findFirst
   */
  export type NewsCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter, which NewsComment to fetch.
     */
    where?: NewsCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsComments to fetch.
     */
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsComments.
     */
    cursor?: NewsCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsComments.
     */
    distinct?: NewsCommentScalarFieldEnum | NewsCommentScalarFieldEnum[]
  }

  /**
   * NewsComment findFirstOrThrow
   */
  export type NewsCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter, which NewsComment to fetch.
     */
    where?: NewsCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsComments to fetch.
     */
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsComments.
     */
    cursor?: NewsCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsComments.
     */
    distinct?: NewsCommentScalarFieldEnum | NewsCommentScalarFieldEnum[]
  }

  /**
   * NewsComment findMany
   */
  export type NewsCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter, which NewsComments to fetch.
     */
    where?: NewsCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsComments to fetch.
     */
    orderBy?: NewsCommentOrderByWithRelationInput | NewsCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsComments.
     */
    cursor?: NewsCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsComments.
     */
    skip?: number
    distinct?: NewsCommentScalarFieldEnum | NewsCommentScalarFieldEnum[]
  }

  /**
   * NewsComment create
   */
  export type NewsCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsComment.
     */
    data: XOR<NewsCommentCreateInput, NewsCommentUncheckedCreateInput>
  }

  /**
   * NewsComment createMany
   */
  export type NewsCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsComments.
     */
    data: NewsCommentCreateManyInput | NewsCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsComment createManyAndReturn
   */
  export type NewsCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * The data used to create many NewsComments.
     */
    data: NewsCommentCreateManyInput | NewsCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsComment update
   */
  export type NewsCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsComment.
     */
    data: XOR<NewsCommentUpdateInput, NewsCommentUncheckedUpdateInput>
    /**
     * Choose, which NewsComment to update.
     */
    where: NewsCommentWhereUniqueInput
  }

  /**
   * NewsComment updateMany
   */
  export type NewsCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsComments.
     */
    data: XOR<NewsCommentUpdateManyMutationInput, NewsCommentUncheckedUpdateManyInput>
    /**
     * Filter which NewsComments to update
     */
    where?: NewsCommentWhereInput
    /**
     * Limit how many NewsComments to update.
     */
    limit?: number
  }

  /**
   * NewsComment updateManyAndReturn
   */
  export type NewsCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * The data used to update NewsComments.
     */
    data: XOR<NewsCommentUpdateManyMutationInput, NewsCommentUncheckedUpdateManyInput>
    /**
     * Filter which NewsComments to update
     */
    where?: NewsCommentWhereInput
    /**
     * Limit how many NewsComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsComment upsert
   */
  export type NewsCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsComment to update in case it exists.
     */
    where: NewsCommentWhereUniqueInput
    /**
     * In case the NewsComment found by the `where` argument doesn't exist, create a new NewsComment with this data.
     */
    create: XOR<NewsCommentCreateInput, NewsCommentUncheckedCreateInput>
    /**
     * In case the NewsComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCommentUpdateInput, NewsCommentUncheckedUpdateInput>
  }

  /**
   * NewsComment delete
   */
  export type NewsCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
    /**
     * Filter which NewsComment to delete.
     */
    where: NewsCommentWhereUniqueInput
  }

  /**
   * NewsComment deleteMany
   */
  export type NewsCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsComments to delete
     */
    where?: NewsCommentWhereInput
    /**
     * Limit how many NewsComments to delete.
     */
    limit?: number
  }

  /**
   * NewsComment without action
   */
  export type NewsCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsComment
     */
    select?: NewsCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsComment
     */
    omit?: NewsCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCommentInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticleLike
   */

  export type AggregateNewsArticleLike = {
    _count: NewsArticleLikeCountAggregateOutputType | null
    _min: NewsArticleLikeMinAggregateOutputType | null
    _max: NewsArticleLikeMaxAggregateOutputType | null
  }

  export type NewsArticleLikeMinAggregateOutputType = {
    id: string | null
    likerId: string | null
    newsArticleId: string | null
    createdAt: Date | null
  }

  export type NewsArticleLikeMaxAggregateOutputType = {
    id: string | null
    likerId: string | null
    newsArticleId: string | null
    createdAt: Date | null
  }

  export type NewsArticleLikeCountAggregateOutputType = {
    id: number
    likerId: number
    newsArticleId: number
    createdAt: number
    _all: number
  }


  export type NewsArticleLikeMinAggregateInputType = {
    id?: true
    likerId?: true
    newsArticleId?: true
    createdAt?: true
  }

  export type NewsArticleLikeMaxAggregateInputType = {
    id?: true
    likerId?: true
    newsArticleId?: true
    createdAt?: true
  }

  export type NewsArticleLikeCountAggregateInputType = {
    id?: true
    likerId?: true
    newsArticleId?: true
    createdAt?: true
    _all?: true
  }

  export type NewsArticleLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticleLike to aggregate.
     */
    where?: NewsArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleLikes to fetch.
     */
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticleLikes
    **/
    _count?: true | NewsArticleLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleLikeMaxAggregateInputType
  }

  export type GetNewsArticleLikeAggregateType<T extends NewsArticleLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticleLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticleLike[P]>
      : GetScalarType<T[P], AggregateNewsArticleLike[P]>
  }




  export type NewsArticleLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleLikeWhereInput
    orderBy?: NewsArticleLikeOrderByWithAggregationInput | NewsArticleLikeOrderByWithAggregationInput[]
    by: NewsArticleLikeScalarFieldEnum[] | NewsArticleLikeScalarFieldEnum
    having?: NewsArticleLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleLikeCountAggregateInputType | true
    _min?: NewsArticleLikeMinAggregateInputType
    _max?: NewsArticleLikeMaxAggregateInputType
  }

  export type NewsArticleLikeGroupByOutputType = {
    id: string
    likerId: string
    newsArticleId: string
    createdAt: Date
    _count: NewsArticleLikeCountAggregateOutputType | null
    _min: NewsArticleLikeMinAggregateOutputType | null
    _max: NewsArticleLikeMaxAggregateOutputType | null
  }

  type GetNewsArticleLikeGroupByPayload<T extends NewsArticleLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleLikeGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleLikeGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    likerId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleLike"]>

  export type NewsArticleLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    likerId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleLike"]>

  export type NewsArticleLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    likerId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleLike"]>

  export type NewsArticleLikeSelectScalar = {
    id?: boolean
    likerId?: boolean
    newsArticleId?: boolean
    createdAt?: boolean
  }

  export type NewsArticleLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "likerId" | "newsArticleId" | "createdAt", ExtArgs["result"]["newsArticleLike"]>
  export type NewsArticleLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsArticleLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }
  export type NewsArticleLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liker?: boolean | UserDefaultArgs<ExtArgs>
    newsArticle?: boolean | NewsArticleDefaultArgs<ExtArgs>
  }

  export type $NewsArticleLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticleLike"
    objects: {
      liker: Prisma.$UserPayload<ExtArgs>
      newsArticle: Prisma.$NewsArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      likerId: string
      newsArticleId: string
      createdAt: Date
    }, ExtArgs["result"]["newsArticleLike"]>
    composites: {}
  }

  type NewsArticleLikeGetPayload<S extends boolean | null | undefined | NewsArticleLikeDefaultArgs> = $Result.GetResult<Prisma.$NewsArticleLikePayload, S>

  type NewsArticleLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleLikeCountAggregateInputType | true
    }

  export interface NewsArticleLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticleLike'], meta: { name: 'NewsArticleLike' } }
    /**
     * Find zero or one NewsArticleLike that matches the filter.
     * @param {NewsArticleLikeFindUniqueArgs} args - Arguments to find a NewsArticleLike
     * @example
     * // Get one NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleLikeFindUniqueArgs>(args: SelectSubset<T, NewsArticleLikeFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticleLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleLikeFindUniqueOrThrowArgs} args - Arguments to find a NewsArticleLike
     * @example
     * // Get one NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticleLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeFindFirstArgs} args - Arguments to find a NewsArticleLike
     * @example
     * // Get one NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleLikeFindFirstArgs>(args?: SelectSubset<T, NewsArticleLikeFindFirstArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticleLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeFindFirstOrThrowArgs} args - Arguments to find a NewsArticleLike
     * @example
     * // Get one NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticleLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticleLikes
     * const newsArticleLikes = await prisma.newsArticleLike.findMany()
     * 
     * // Get first 10 NewsArticleLikes
     * const newsArticleLikes = await prisma.newsArticleLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleLikeWithIdOnly = await prisma.newsArticleLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleLikeFindManyArgs>(args?: SelectSubset<T, NewsArticleLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticleLike.
     * @param {NewsArticleLikeCreateArgs} args - Arguments to create a NewsArticleLike.
     * @example
     * // Create one NewsArticleLike
     * const NewsArticleLike = await prisma.newsArticleLike.create({
     *   data: {
     *     // ... data to create a NewsArticleLike
     *   }
     * })
     * 
     */
    create<T extends NewsArticleLikeCreateArgs>(args: SelectSubset<T, NewsArticleLikeCreateArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticleLikes.
     * @param {NewsArticleLikeCreateManyArgs} args - Arguments to create many NewsArticleLikes.
     * @example
     * // Create many NewsArticleLikes
     * const newsArticleLike = await prisma.newsArticleLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleLikeCreateManyArgs>(args?: SelectSubset<T, NewsArticleLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticleLikes and returns the data saved in the database.
     * @param {NewsArticleLikeCreateManyAndReturnArgs} args - Arguments to create many NewsArticleLikes.
     * @example
     * // Create many NewsArticleLikes
     * const newsArticleLike = await prisma.newsArticleLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticleLikes and only return the `id`
     * const newsArticleLikeWithIdOnly = await prisma.newsArticleLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticleLike.
     * @param {NewsArticleLikeDeleteArgs} args - Arguments to delete one NewsArticleLike.
     * @example
     * // Delete one NewsArticleLike
     * const NewsArticleLike = await prisma.newsArticleLike.delete({
     *   where: {
     *     // ... filter to delete one NewsArticleLike
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleLikeDeleteArgs>(args: SelectSubset<T, NewsArticleLikeDeleteArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticleLike.
     * @param {NewsArticleLikeUpdateArgs} args - Arguments to update one NewsArticleLike.
     * @example
     * // Update one NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleLikeUpdateArgs>(args: SelectSubset<T, NewsArticleLikeUpdateArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticleLikes.
     * @param {NewsArticleLikeDeleteManyArgs} args - Arguments to filter NewsArticleLikes to delete.
     * @example
     * // Delete a few NewsArticleLikes
     * const { count } = await prisma.newsArticleLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleLikeDeleteManyArgs>(args?: SelectSubset<T, NewsArticleLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticleLikes
     * const newsArticleLike = await prisma.newsArticleLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleLikeUpdateManyArgs>(args: SelectSubset<T, NewsArticleLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticleLikes and returns the data updated in the database.
     * @param {NewsArticleLikeUpdateManyAndReturnArgs} args - Arguments to update many NewsArticleLikes.
     * @example
     * // Update many NewsArticleLikes
     * const newsArticleLike = await prisma.newsArticleLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticleLikes and only return the `id`
     * const newsArticleLikeWithIdOnly = await prisma.newsArticleLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsArticleLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticleLike.
     * @param {NewsArticleLikeUpsertArgs} args - Arguments to update or create a NewsArticleLike.
     * @example
     * // Update or create a NewsArticleLike
     * const newsArticleLike = await prisma.newsArticleLike.upsert({
     *   create: {
     *     // ... data to create a NewsArticleLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticleLike we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleLikeUpsertArgs>(args: SelectSubset<T, NewsArticleLikeUpsertArgs<ExtArgs>>): Prisma__NewsArticleLikeClient<$Result.GetResult<Prisma.$NewsArticleLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeCountArgs} args - Arguments to filter NewsArticleLikes to count.
     * @example
     * // Count the number of NewsArticleLikes
     * const count = await prisma.newsArticleLike.count({
     *   where: {
     *     // ... the filter for the NewsArticleLikes we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleLikeCountArgs>(
      args?: Subset<T, NewsArticleLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleLikeAggregateArgs>(args: Subset<T, NewsArticleLikeAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleLikeAggregateType<T>>

    /**
     * Group by NewsArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleLikeGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleLikeGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NewsArticleLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticleLike model
   */
  readonly fields: NewsArticleLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticleLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    newsArticle<T extends NewsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticleDefaultArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsArticleLike model
   */
  interface NewsArticleLikeFieldRefs {
    readonly id: FieldRef<"NewsArticleLike", 'String'>
    readonly likerId: FieldRef<"NewsArticleLike", 'String'>
    readonly newsArticleId: FieldRef<"NewsArticleLike", 'String'>
    readonly createdAt: FieldRef<"NewsArticleLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticleLike findUnique
   */
  export type NewsArticleLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleLike to fetch.
     */
    where: NewsArticleLikeWhereUniqueInput
  }

  /**
   * NewsArticleLike findUniqueOrThrow
   */
  export type NewsArticleLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleLike to fetch.
     */
    where: NewsArticleLikeWhereUniqueInput
  }

  /**
   * NewsArticleLike findFirst
   */
  export type NewsArticleLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleLike to fetch.
     */
    where?: NewsArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleLikes to fetch.
     */
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticleLikes.
     */
    cursor?: NewsArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticleLikes.
     */
    distinct?: NewsArticleLikeScalarFieldEnum | NewsArticleLikeScalarFieldEnum[]
  }

  /**
   * NewsArticleLike findFirstOrThrow
   */
  export type NewsArticleLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleLike to fetch.
     */
    where?: NewsArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleLikes to fetch.
     */
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticleLikes.
     */
    cursor?: NewsArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticleLikes.
     */
    distinct?: NewsArticleLikeScalarFieldEnum | NewsArticleLikeScalarFieldEnum[]
  }

  /**
   * NewsArticleLike findMany
   */
  export type NewsArticleLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleLikes to fetch.
     */
    where?: NewsArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleLikes to fetch.
     */
    orderBy?: NewsArticleLikeOrderByWithRelationInput | NewsArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticleLikes.
     */
    cursor?: NewsArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleLikes.
     */
    skip?: number
    distinct?: NewsArticleLikeScalarFieldEnum | NewsArticleLikeScalarFieldEnum[]
  }

  /**
   * NewsArticleLike create
   */
  export type NewsArticleLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticleLike.
     */
    data: XOR<NewsArticleLikeCreateInput, NewsArticleLikeUncheckedCreateInput>
  }

  /**
   * NewsArticleLike createMany
   */
  export type NewsArticleLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticleLikes.
     */
    data: NewsArticleLikeCreateManyInput | NewsArticleLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticleLike createManyAndReturn
   */
  export type NewsArticleLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticleLikes.
     */
    data: NewsArticleLikeCreateManyInput | NewsArticleLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticleLike update
   */
  export type NewsArticleLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticleLike.
     */
    data: XOR<NewsArticleLikeUpdateInput, NewsArticleLikeUncheckedUpdateInput>
    /**
     * Choose, which NewsArticleLike to update.
     */
    where: NewsArticleLikeWhereUniqueInput
  }

  /**
   * NewsArticleLike updateMany
   */
  export type NewsArticleLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticleLikes.
     */
    data: XOR<NewsArticleLikeUpdateManyMutationInput, NewsArticleLikeUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticleLikes to update
     */
    where?: NewsArticleLikeWhereInput
    /**
     * Limit how many NewsArticleLikes to update.
     */
    limit?: number
  }

  /**
   * NewsArticleLike updateManyAndReturn
   */
  export type NewsArticleLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticleLikes.
     */
    data: XOR<NewsArticleLikeUpdateManyMutationInput, NewsArticleLikeUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticleLikes to update
     */
    where?: NewsArticleLikeWhereInput
    /**
     * Limit how many NewsArticleLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticleLike upsert
   */
  export type NewsArticleLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticleLike to update in case it exists.
     */
    where: NewsArticleLikeWhereUniqueInput
    /**
     * In case the NewsArticleLike found by the `where` argument doesn't exist, create a new NewsArticleLike with this data.
     */
    create: XOR<NewsArticleLikeCreateInput, NewsArticleLikeUncheckedCreateInput>
    /**
     * In case the NewsArticleLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleLikeUpdateInput, NewsArticleLikeUncheckedUpdateInput>
  }

  /**
   * NewsArticleLike delete
   */
  export type NewsArticleLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
    /**
     * Filter which NewsArticleLike to delete.
     */
    where: NewsArticleLikeWhereUniqueInput
  }

  /**
   * NewsArticleLike deleteMany
   */
  export type NewsArticleLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticleLikes to delete
     */
    where?: NewsArticleLikeWhereInput
    /**
     * Limit how many NewsArticleLikes to delete.
     */
    limit?: number
  }

  /**
   * NewsArticleLike without action
   */
  export type NewsArticleLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleLike
     */
    select?: NewsArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleLike
     */
    omit?: NewsArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    avatarUrl: 'avatarUrl',
    role: 'role',
    createdAt: 'createdAt',
    telephone: 'telephone',
    passwordHash: 'passwordHash',
    googleId: 'googleId',
    bio: 'bio',
    isWelcomed: 'isWelcomed',
    isVerified: 'isVerified',
    emailVerified: 'emailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartMentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    about: 'about',
    headOfDepartmentId: 'headOfDepartmentId'
  };

  export type DepartMentScalarFieldEnum = (typeof DepartMentScalarFieldEnum)[keyof typeof DepartMentScalarFieldEnum]


  export const DepartMentalSectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    hierarchy: 'hierarchy',
    departMentId: 'departMentId'
  };

  export type DepartMentalSectorScalarFieldEnum = (typeof DepartMentalSectorScalarFieldEnum)[keyof typeof DepartMentalSectorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    assumedOffice: 'assumedOffice',
    endedOffice: 'endedOffice',
    position: 'position',
    hierarchy: 'hierarchy',
    shortMessageToPublic: 'shortMessageToPublic',
    departMentalSectorId: 'departMentalSectorId',
    userId: 'userId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    role: 'role'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const NewsLetterSubscriptionScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type NewsLetterSubscriptionScalarFieldEnum = (typeof NewsLetterSubscriptionScalarFieldEnum)[keyof typeof NewsLetterSubscriptionScalarFieldEnum]


  export const NewsLetterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type NewsLetterScalarFieldEnum = (typeof NewsLetterScalarFieldEnum)[keyof typeof NewsLetterScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title: 'title',
    publishedAt: 'publishedAt',
    content: 'content',
    authorId: 'authorId',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const NewsCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    commenterId: 'commenterId',
    newsArticleId: 'newsArticleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsCommentScalarFieldEnum = (typeof NewsCommentScalarFieldEnum)[keyof typeof NewsCommentScalarFieldEnum]


  export const NewsArticleLikeScalarFieldEnum: {
    id: 'id',
    likerId: 'likerId',
    newsArticleId: 'newsArticleId',
    createdAt: 'createdAt'
  };

  export type NewsArticleLikeScalarFieldEnum = (typeof NewsArticleLikeScalarFieldEnum)[keyof typeof NewsArticleLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    telephone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isWelcomed?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    sessions?: SessionListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    newsComments?: NewsCommentListRelationFilter
    newsArticleLikes?: NewsArticleLikeListRelationFilter
    newsLetters?: NewsLetterListRelationFilter
    employees?: EmployeeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    telephone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    emailVerificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    newsArticles?: NewsArticleOrderByRelationAggregateInput
    newsComments?: NewsCommentOrderByRelationAggregateInput
    newsArticleLikes?: NewsArticleLikeOrderByRelationAggregateInput
    newsLetters?: NewsLetterOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    telephone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isWelcomed?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    sessions?: SessionListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    newsComments?: NewsCommentListRelationFilter
    newsArticleLikes?: NewsArticleLikeListRelationFilter
    newsLetters?: NewsLetterListRelationFilter
    employees?: EmployeeListRelationFilter
  }, "id" | "username" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    telephone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    isWelcomed?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type DepartMentWhereInput = {
    AND?: DepartMentWhereInput | DepartMentWhereInput[]
    OR?: DepartMentWhereInput[]
    NOT?: DepartMentWhereInput | DepartMentWhereInput[]
    id?: StringFilter<"DepartMent"> | string
    name?: StringFilter<"DepartMent"> | string
    about?: StringNullableFilter<"DepartMent"> | string | null
    headOfDepartmentId?: StringNullableFilter<"DepartMent"> | string | null
    headOfDepartment?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    departmentalSectors?: DepartMentalSectorListRelationFilter
  }

  export type DepartMentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrderInput | SortOrder
    headOfDepartmentId?: SortOrderInput | SortOrder
    headOfDepartment?: EmployeeOrderByWithRelationInput
    departmentalSectors?: DepartMentalSectorOrderByRelationAggregateInput
  }

  export type DepartMentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartMentWhereInput | DepartMentWhereInput[]
    OR?: DepartMentWhereInput[]
    NOT?: DepartMentWhereInput | DepartMentWhereInput[]
    name?: StringFilter<"DepartMent"> | string
    about?: StringNullableFilter<"DepartMent"> | string | null
    headOfDepartmentId?: StringNullableFilter<"DepartMent"> | string | null
    headOfDepartment?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    departmentalSectors?: DepartMentalSectorListRelationFilter
  }, "id">

  export type DepartMentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrderInput | SortOrder
    headOfDepartmentId?: SortOrderInput | SortOrder
    _count?: DepartMentCountOrderByAggregateInput
    _max?: DepartMentMaxOrderByAggregateInput
    _min?: DepartMentMinOrderByAggregateInput
  }

  export type DepartMentScalarWhereWithAggregatesInput = {
    AND?: DepartMentScalarWhereWithAggregatesInput | DepartMentScalarWhereWithAggregatesInput[]
    OR?: DepartMentScalarWhereWithAggregatesInput[]
    NOT?: DepartMentScalarWhereWithAggregatesInput | DepartMentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepartMent"> | string
    name?: StringWithAggregatesFilter<"DepartMent"> | string
    about?: StringNullableWithAggregatesFilter<"DepartMent"> | string | null
    headOfDepartmentId?: StringNullableWithAggregatesFilter<"DepartMent"> | string | null
  }

  export type DepartMentalSectorWhereInput = {
    AND?: DepartMentalSectorWhereInput | DepartMentalSectorWhereInput[]
    OR?: DepartMentalSectorWhereInput[]
    NOT?: DepartMentalSectorWhereInput | DepartMentalSectorWhereInput[]
    id?: StringFilter<"DepartMentalSector"> | string
    name?: StringFilter<"DepartMentalSector"> | string
    description?: StringNullableFilter<"DepartMentalSector"> | string | null
    hierarchy?: IntFilter<"DepartMentalSector"> | number
    departMentId?: StringNullableFilter<"DepartMentalSector"> | string | null
    employees?: EmployeeListRelationFilter
    departMent?: XOR<DepartMentNullableScalarRelationFilter, DepartMentWhereInput> | null
  }

  export type DepartMentalSectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hierarchy?: SortOrder
    departMentId?: SortOrderInput | SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
    departMent?: DepartMentOrderByWithRelationInput
  }

  export type DepartMentalSectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartMentalSectorWhereInput | DepartMentalSectorWhereInput[]
    OR?: DepartMentalSectorWhereInput[]
    NOT?: DepartMentalSectorWhereInput | DepartMentalSectorWhereInput[]
    name?: StringFilter<"DepartMentalSector"> | string
    description?: StringNullableFilter<"DepartMentalSector"> | string | null
    hierarchy?: IntFilter<"DepartMentalSector"> | number
    departMentId?: StringNullableFilter<"DepartMentalSector"> | string | null
    employees?: EmployeeListRelationFilter
    departMent?: XOR<DepartMentNullableScalarRelationFilter, DepartMentWhereInput> | null
  }, "id">

  export type DepartMentalSectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hierarchy?: SortOrder
    departMentId?: SortOrderInput | SortOrder
    _count?: DepartMentalSectorCountOrderByAggregateInput
    _avg?: DepartMentalSectorAvgOrderByAggregateInput
    _max?: DepartMentalSectorMaxOrderByAggregateInput
    _min?: DepartMentalSectorMinOrderByAggregateInput
    _sum?: DepartMentalSectorSumOrderByAggregateInput
  }

  export type DepartMentalSectorScalarWhereWithAggregatesInput = {
    AND?: DepartMentalSectorScalarWhereWithAggregatesInput | DepartMentalSectorScalarWhereWithAggregatesInput[]
    OR?: DepartMentalSectorScalarWhereWithAggregatesInput[]
    NOT?: DepartMentalSectorScalarWhereWithAggregatesInput | DepartMentalSectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DepartMentalSector"> | string
    name?: StringWithAggregatesFilter<"DepartMentalSector"> | string
    description?: StringNullableWithAggregatesFilter<"DepartMentalSector"> | string | null
    hierarchy?: IntWithAggregatesFilter<"DepartMentalSector"> | number
    departMentId?: StringNullableWithAggregatesFilter<"DepartMentalSector"> | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    assumedOffice?: IntFilter<"Employee"> | number
    endedOffice?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    hierarchy?: IntFilter<"Employee"> | number
    shortMessageToPublic?: StringNullableFilter<"Employee"> | string | null
    departMentalSectorId?: StringNullableFilter<"Employee"> | string | null
    userId?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    departMents?: DepartMentListRelationFilter
    departMentalSector?: XOR<DepartMentalSectorNullableScalarRelationFilter, DepartMentalSectorWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    assumedOffice?: SortOrder
    endedOffice?: SortOrderInput | SortOrder
    position?: SortOrder
    hierarchy?: SortOrder
    shortMessageToPublic?: SortOrderInput | SortOrder
    departMentalSectorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    departMents?: DepartMentOrderByRelationAggregateInput
    departMentalSector?: DepartMentalSectorOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    assumedOffice?: IntFilter<"Employee"> | number
    endedOffice?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    hierarchy?: IntFilter<"Employee"> | number
    shortMessageToPublic?: StringNullableFilter<"Employee"> | string | null
    departMentalSectorId?: StringNullableFilter<"Employee"> | string | null
    userId?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    departMents?: DepartMentListRelationFilter
    departMentalSector?: XOR<DepartMentalSectorNullableScalarRelationFilter, DepartMentalSectorWhereInput> | null
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    assumedOffice?: SortOrder
    endedOffice?: SortOrderInput | SortOrder
    position?: SortOrder
    hierarchy?: SortOrder
    shortMessageToPublic?: SortOrderInput | SortOrder
    departMentalSectorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    assumedOffice?: IntWithAggregatesFilter<"Employee"> | number
    endedOffice?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    position?: StringWithAggregatesFilter<"Employee"> | string
    hierarchy?: IntWithAggregatesFilter<"Employee"> | number
    shortMessageToPublic?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    departMentalSectorId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    userId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _avg?: EmailVerificationTokenAvgOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
    _sum?: EmailVerificationTokenSumOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    userId?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expires?: BigIntWithAggregatesFilter<"EmailVerificationToken"> | bigint | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    role?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"Session"> | $Enums.Role
  }

  export type NewsLetterSubscriptionWhereInput = {
    AND?: NewsLetterSubscriptionWhereInput | NewsLetterSubscriptionWhereInput[]
    OR?: NewsLetterSubscriptionWhereInput[]
    NOT?: NewsLetterSubscriptionWhereInput | NewsLetterSubscriptionWhereInput[]
    id?: StringFilter<"NewsLetterSubscription"> | string
    email?: StringFilter<"NewsLetterSubscription"> | string
    name?: StringFilter<"NewsLetterSubscription"> | string
    createdAt?: DateTimeFilter<"NewsLetterSubscription"> | Date | string
  }

  export type NewsLetterSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLetterSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewsLetterSubscriptionWhereInput | NewsLetterSubscriptionWhereInput[]
    OR?: NewsLetterSubscriptionWhereInput[]
    NOT?: NewsLetterSubscriptionWhereInput | NewsLetterSubscriptionWhereInput[]
    name?: StringFilter<"NewsLetterSubscription"> | string
    createdAt?: DateTimeFilter<"NewsLetterSubscription"> | Date | string
  }, "id" | "email">

  export type NewsLetterSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: NewsLetterSubscriptionCountOrderByAggregateInput
    _max?: NewsLetterSubscriptionMaxOrderByAggregateInput
    _min?: NewsLetterSubscriptionMinOrderByAggregateInput
  }

  export type NewsLetterSubscriptionScalarWhereWithAggregatesInput = {
    AND?: NewsLetterSubscriptionScalarWhereWithAggregatesInput | NewsLetterSubscriptionScalarWhereWithAggregatesInput[]
    OR?: NewsLetterSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: NewsLetterSubscriptionScalarWhereWithAggregatesInput | NewsLetterSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsLetterSubscription"> | string
    email?: StringWithAggregatesFilter<"NewsLetterSubscription"> | string
    name?: StringWithAggregatesFilter<"NewsLetterSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsLetterSubscription"> | Date | string
  }

  export type NewsLetterWhereInput = {
    AND?: NewsLetterWhereInput | NewsLetterWhereInput[]
    OR?: NewsLetterWhereInput[]
    NOT?: NewsLetterWhereInput | NewsLetterWhereInput[]
    id?: StringFilter<"NewsLetter"> | string
    title?: StringFilter<"NewsLetter"> | string
    content?: StringFilter<"NewsLetter"> | string
    description?: StringFilter<"NewsLetter"> | string
    createdAt?: DateTimeFilter<"NewsLetter"> | Date | string
    updatedAt?: DateTimeFilter<"NewsLetter"> | Date | string
    authorId?: StringFilter<"NewsLetter"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsLetterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type NewsLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsLetterWhereInput | NewsLetterWhereInput[]
    OR?: NewsLetterWhereInput[]
    NOT?: NewsLetterWhereInput | NewsLetterWhereInput[]
    title?: StringFilter<"NewsLetter"> | string
    content?: StringFilter<"NewsLetter"> | string
    description?: StringFilter<"NewsLetter"> | string
    createdAt?: DateTimeFilter<"NewsLetter"> | Date | string
    updatedAt?: DateTimeFilter<"NewsLetter"> | Date | string
    authorId?: StringFilter<"NewsLetter"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NewsLetterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: NewsLetterCountOrderByAggregateInput
    _max?: NewsLetterMaxOrderByAggregateInput
    _min?: NewsLetterMinOrderByAggregateInput
  }

  export type NewsLetterScalarWhereWithAggregatesInput = {
    AND?: NewsLetterScalarWhereWithAggregatesInput | NewsLetterScalarWhereWithAggregatesInput[]
    OR?: NewsLetterScalarWhereWithAggregatesInput[]
    NOT?: NewsLetterScalarWhereWithAggregatesInput | NewsLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsLetter"> | string
    title?: StringWithAggregatesFilter<"NewsLetter"> | string
    content?: StringWithAggregatesFilter<"NewsLetter"> | string
    description?: StringWithAggregatesFilter<"NewsLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsLetter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsLetter"> | Date | string
    authorId?: StringWithAggregatesFilter<"NewsLetter"> | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    title?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    content?: StringFilter<"NewsArticle"> | string
    authorId?: StringFilter<"NewsArticle"> | string
    location?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsComments?: NewsCommentListRelationFilter
    newsArticleLikes?: NewsArticleLikeListRelationFilter
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    publishedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    newsComments?: NewsCommentOrderByRelationAggregateInput
    newsArticleLikes?: NewsArticleLikeOrderByRelationAggregateInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    title?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    content?: StringFilter<"NewsArticle"> | string
    authorId?: StringFilter<"NewsArticle"> | string
    location?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsComments?: NewsCommentListRelationFilter
    newsArticleLikes?: NewsArticleLikeListRelationFilter
  }, "id">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    publishedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    content?: StringWithAggregatesFilter<"NewsArticle"> | string
    authorId?: StringWithAggregatesFilter<"NewsArticle"> | string
    location?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
  }

  export type NewsCommentWhereInput = {
    AND?: NewsCommentWhereInput | NewsCommentWhereInput[]
    OR?: NewsCommentWhereInput[]
    NOT?: NewsCommentWhereInput | NewsCommentWhereInput[]
    id?: StringFilter<"NewsComment"> | string
    content?: StringFilter<"NewsComment"> | string
    commenterId?: StringFilter<"NewsComment"> | string
    newsArticleId?: StringFilter<"NewsComment"> | string
    createdAt?: DateTimeFilter<"NewsComment"> | Date | string
    updatedAt?: DateTimeFilter<"NewsComment"> | Date | string
    commenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsArticle?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }

  export type NewsCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    commenterId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commenter?: UserOrderByWithRelationInput
    newsArticle?: NewsArticleOrderByWithRelationInput
  }

  export type NewsCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsCommentWhereInput | NewsCommentWhereInput[]
    OR?: NewsCommentWhereInput[]
    NOT?: NewsCommentWhereInput | NewsCommentWhereInput[]
    content?: StringFilter<"NewsComment"> | string
    commenterId?: StringFilter<"NewsComment"> | string
    newsArticleId?: StringFilter<"NewsComment"> | string
    createdAt?: DateTimeFilter<"NewsComment"> | Date | string
    updatedAt?: DateTimeFilter<"NewsComment"> | Date | string
    commenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsArticle?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }, "id">

  export type NewsCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    commenterId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCommentCountOrderByAggregateInput
    _max?: NewsCommentMaxOrderByAggregateInput
    _min?: NewsCommentMinOrderByAggregateInput
  }

  export type NewsCommentScalarWhereWithAggregatesInput = {
    AND?: NewsCommentScalarWhereWithAggregatesInput | NewsCommentScalarWhereWithAggregatesInput[]
    OR?: NewsCommentScalarWhereWithAggregatesInput[]
    NOT?: NewsCommentScalarWhereWithAggregatesInput | NewsCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsComment"> | string
    content?: StringWithAggregatesFilter<"NewsComment"> | string
    commenterId?: StringWithAggregatesFilter<"NewsComment"> | string
    newsArticleId?: StringWithAggregatesFilter<"NewsComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsComment"> | Date | string
  }

  export type NewsArticleLikeWhereInput = {
    AND?: NewsArticleLikeWhereInput | NewsArticleLikeWhereInput[]
    OR?: NewsArticleLikeWhereInput[]
    NOT?: NewsArticleLikeWhereInput | NewsArticleLikeWhereInput[]
    id?: StringFilter<"NewsArticleLike"> | string
    likerId?: StringFilter<"NewsArticleLike"> | string
    newsArticleId?: StringFilter<"NewsArticleLike"> | string
    createdAt?: DateTimeFilter<"NewsArticleLike"> | Date | string
    liker?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsArticle?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }

  export type NewsArticleLikeOrderByWithRelationInput = {
    id?: SortOrder
    likerId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    liker?: UserOrderByWithRelationInput
    newsArticle?: NewsArticleOrderByWithRelationInput
  }

  export type NewsArticleLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsArticleLikeWhereInput | NewsArticleLikeWhereInput[]
    OR?: NewsArticleLikeWhereInput[]
    NOT?: NewsArticleLikeWhereInput | NewsArticleLikeWhereInput[]
    likerId?: StringFilter<"NewsArticleLike"> | string
    newsArticleId?: StringFilter<"NewsArticleLike"> | string
    createdAt?: DateTimeFilter<"NewsArticleLike"> | Date | string
    liker?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsArticle?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
  }, "id">

  export type NewsArticleLikeOrderByWithAggregationInput = {
    id?: SortOrder
    likerId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    _count?: NewsArticleLikeCountOrderByAggregateInput
    _max?: NewsArticleLikeMaxOrderByAggregateInput
    _min?: NewsArticleLikeMinOrderByAggregateInput
  }

  export type NewsArticleLikeScalarWhereWithAggregatesInput = {
    AND?: NewsArticleLikeScalarWhereWithAggregatesInput | NewsArticleLikeScalarWhereWithAggregatesInput[]
    OR?: NewsArticleLikeScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleLikeScalarWhereWithAggregatesInput | NewsArticleLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticleLike"> | string
    likerId?: StringWithAggregatesFilter<"NewsArticleLike"> | string
    newsArticleId?: StringWithAggregatesFilter<"NewsArticleLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticleLike"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartMentCreateInput = {
    id?: string
    name: string
    about?: string | null
    headOfDepartment?: EmployeeCreateNestedOneWithoutDepartMentsInput
    departmentalSectors?: DepartMentalSectorCreateNestedManyWithoutDepartMentInput
  }

  export type DepartMentUncheckedCreateInput = {
    id?: string
    name: string
    about?: string | null
    headOfDepartmentId?: string | null
    departmentalSectors?: DepartMentalSectorUncheckedCreateNestedManyWithoutDepartMentInput
  }

  export type DepartMentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    headOfDepartment?: EmployeeUpdateOneWithoutDepartMentsNestedInput
    departmentalSectors?: DepartMentalSectorUpdateManyWithoutDepartMentNestedInput
  }

  export type DepartMentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    headOfDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentalSectors?: DepartMentalSectorUncheckedUpdateManyWithoutDepartMentNestedInput
  }

  export type DepartMentCreateManyInput = {
    id?: string
    name: string
    about?: string | null
    headOfDepartmentId?: string | null
  }

  export type DepartMentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartMentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    headOfDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartMentalSectorCreateInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    employees?: EmployeeCreateNestedManyWithoutDepartMentalSectorInput
    departMent?: DepartMentCreateNestedOneWithoutDepartmentalSectorsInput
  }

  export type DepartMentalSectorUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    departMentId?: string | null
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartMentalSectorInput
  }

  export type DepartMentalSectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUpdateManyWithoutDepartMentalSectorNestedInput
    departMent?: DepartMentUpdateOneWithoutDepartmentalSectorsNestedInput
  }

  export type DepartMentalSectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    departMentId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: EmployeeUncheckedUpdateManyWithoutDepartMentalSectorNestedInput
  }

  export type DepartMentalSectorCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    departMentId?: string | null
  }

  export type DepartMentalSectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
  }

  export type DepartMentalSectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    departMentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    user: UserCreateNestedOneWithoutEmployeesInput
    departMents?: DepartMentCreateNestedManyWithoutHeadOfDepartmentInput
    departMentalSector?: DepartMentalSectorCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMentalSectorId?: string | null
    userId: string
    departMents?: DepartMentUncheckedCreateNestedManyWithoutHeadOfDepartmentInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmployeesNestedInput
    departMents?: DepartMentUpdateManyWithoutHeadOfDepartmentNestedInput
    departMentalSector?: DepartMentalSectorUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMentalSectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    departMents?: DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMentalSectorId?: string | null
    userId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMentalSectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    expires: bigint | number
    user: UserCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    userId: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    role?: $Enums.Role
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    role?: $Enums.Role
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type NewsLetterSubscriptionCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type NewsLetterSubscriptionUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type NewsLetterSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterSubscriptionCreateManyInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type NewsLetterSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterCreateInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsLettersInput
  }

  export type NewsLetterUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type NewsLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsLettersNestedInput
  }

  export type NewsLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLetterCreateManyInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type NewsLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsArticleCreateInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsArticlesInput
    newsComments?: NewsCommentCreateNestedManyWithoutNewsArticleInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    authorId: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutNewsArticleInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsArticlesNestedInput
    newsComments?: NewsCommentUpdateManyWithoutNewsArticleNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsComments?: NewsCommentUncheckedUpdateManyWithoutNewsArticleNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    authorId: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commenter: UserCreateNestedOneWithoutNewsCommentsInput
    newsArticle: NewsArticleCreateNestedOneWithoutNewsCommentsInput
  }

  export type NewsCommentUncheckedCreateInput = {
    id?: string
    content: string
    commenterId: string
    newsArticleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commenter?: UserUpdateOneRequiredWithoutNewsCommentsNestedInput
    newsArticle?: NewsArticleUpdateOneRequiredWithoutNewsCommentsNestedInput
  }

  export type NewsCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    commenterId?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentCreateManyInput = {
    id?: string
    content: string
    commenterId: string
    newsArticleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    commenterId?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    liker: UserCreateNestedOneWithoutNewsArticleLikesInput
    newsArticle: NewsArticleCreateNestedOneWithoutNewsArticleLikesInput
  }

  export type NewsArticleLikeUncheckedCreateInput = {
    id?: string
    likerId: string
    newsArticleId: string
    createdAt?: Date | string
  }

  export type NewsArticleLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liker?: UserUpdateOneRequiredWithoutNewsArticleLikesNestedInput
    newsArticle?: NewsArticleUpdateOneRequiredWithoutNewsArticleLikesNestedInput
  }

  export type NewsArticleLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likerId?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeCreateManyInput = {
    id?: string
    likerId: string
    newsArticleId: string
    createdAt?: Date | string
  }

  export type NewsArticleLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    likerId?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type NewsCommentListRelationFilter = {
    every?: NewsCommentWhereInput
    some?: NewsCommentWhereInput
    none?: NewsCommentWhereInput
  }

  export type NewsArticleLikeListRelationFilter = {
    every?: NewsArticleLikeWhereInput
    some?: NewsArticleLikeWhereInput
    none?: NewsArticleLikeWhereInput
  }

  export type NewsLetterListRelationFilter = {
    every?: NewsLetterWhereInput
    some?: NewsLetterWhereInput
    none?: NewsLetterWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsLetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type DepartMentalSectorListRelationFilter = {
    every?: DepartMentalSectorWhereInput
    some?: DepartMentalSectorWhereInput
    none?: DepartMentalSectorWhereInput
  }

  export type DepartMentalSectorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartMentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type DepartMentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type DepartMentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    headOfDepartmentId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DepartMentNullableScalarRelationFilter = {
    is?: DepartMentWhereInput | null
    isNot?: DepartMentWhereInput | null
  }

  export type DepartMentalSectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hierarchy?: SortOrder
    departMentId?: SortOrder
  }

  export type DepartMentalSectorAvgOrderByAggregateInput = {
    hierarchy?: SortOrder
  }

  export type DepartMentalSectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hierarchy?: SortOrder
    departMentId?: SortOrder
  }

  export type DepartMentalSectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hierarchy?: SortOrder
    departMentId?: SortOrder
  }

  export type DepartMentalSectorSumOrderByAggregateInput = {
    hierarchy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartMentListRelationFilter = {
    every?: DepartMentWhereInput
    some?: DepartMentWhereInput
    none?: DepartMentWhereInput
  }

  export type DepartMentalSectorNullableScalarRelationFilter = {
    is?: DepartMentalSectorWhereInput | null
    isNot?: DepartMentalSectorWhereInput | null
  }

  export type DepartMentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    assumedOffice?: SortOrder
    endedOffice?: SortOrder
    position?: SortOrder
    hierarchy?: SortOrder
    shortMessageToPublic?: SortOrder
    departMentalSectorId?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    assumedOffice?: SortOrder
    endedOffice?: SortOrder
    hierarchy?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    assumedOffice?: SortOrder
    endedOffice?: SortOrder
    position?: SortOrder
    hierarchy?: SortOrder
    shortMessageToPublic?: SortOrder
    departMentalSectorId?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    assumedOffice?: SortOrder
    endedOffice?: SortOrder
    position?: SortOrder
    hierarchy?: SortOrder
    shortMessageToPublic?: SortOrder
    departMentalSectorId?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    assumedOffice?: SortOrder
    endedOffice?: SortOrder
    hierarchy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenAvgOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenSumOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    role?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    role?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NewsLetterSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLetterSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLetterSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsLetterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NewsLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NewsLetterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    publishedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    publishedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    publishedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleScalarRelationFilter = {
    is?: NewsArticleWhereInput
    isNot?: NewsArticleWhereInput
  }

  export type NewsCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    commenterId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    commenterId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    commenterId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleLikeCountOrderByAggregateInput = {
    id?: SortOrder
    likerId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    likerId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleLikeMinOrderByAggregateInput = {
    id?: SortOrder
    likerId?: SortOrder
    newsArticleId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NewsArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type NewsCommentCreateNestedManyWithoutCommenterInput = {
    create?: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput> | NewsCommentCreateWithoutCommenterInput[] | NewsCommentUncheckedCreateWithoutCommenterInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutCommenterInput | NewsCommentCreateOrConnectWithoutCommenterInput[]
    createMany?: NewsCommentCreateManyCommenterInputEnvelope
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
  }

  export type NewsArticleLikeCreateNestedManyWithoutLikerInput = {
    create?: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput> | NewsArticleLikeCreateWithoutLikerInput[] | NewsArticleLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutLikerInput | NewsArticleLikeCreateOrConnectWithoutLikerInput[]
    createMany?: NewsArticleLikeCreateManyLikerInputEnvelope
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
  }

  export type NewsLetterCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput> | NewsLetterCreateWithoutAuthorInput[] | NewsLetterUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsLetterCreateOrConnectWithoutAuthorInput | NewsLetterCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsLetterCreateManyAuthorInputEnvelope
    connect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type NewsCommentUncheckedCreateNestedManyWithoutCommenterInput = {
    create?: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput> | NewsCommentCreateWithoutCommenterInput[] | NewsCommentUncheckedCreateWithoutCommenterInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutCommenterInput | NewsCommentCreateOrConnectWithoutCommenterInput[]
    createMany?: NewsCommentCreateManyCommenterInputEnvelope
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
  }

  export type NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput = {
    create?: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput> | NewsArticleLikeCreateWithoutLikerInput[] | NewsArticleLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutLikerInput | NewsArticleLikeCreateOrConnectWithoutLikerInput[]
    createMany?: NewsArticleLikeCreateManyLikerInputEnvelope
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
  }

  export type NewsLetterUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput> | NewsLetterCreateWithoutAuthorInput[] | NewsLetterUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsLetterCreateOrConnectWithoutAuthorInput | NewsLetterCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsLetterCreateManyAuthorInputEnvelope
    connect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NewsArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutAuthorInput | NewsArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutAuthorInput | NewsArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutAuthorInput | NewsArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type NewsCommentUpdateManyWithoutCommenterNestedInput = {
    create?: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput> | NewsCommentCreateWithoutCommenterInput[] | NewsCommentUncheckedCreateWithoutCommenterInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutCommenterInput | NewsCommentCreateOrConnectWithoutCommenterInput[]
    upsert?: NewsCommentUpsertWithWhereUniqueWithoutCommenterInput | NewsCommentUpsertWithWhereUniqueWithoutCommenterInput[]
    createMany?: NewsCommentCreateManyCommenterInputEnvelope
    set?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    disconnect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    delete?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    update?: NewsCommentUpdateWithWhereUniqueWithoutCommenterInput | NewsCommentUpdateWithWhereUniqueWithoutCommenterInput[]
    updateMany?: NewsCommentUpdateManyWithWhereWithoutCommenterInput | NewsCommentUpdateManyWithWhereWithoutCommenterInput[]
    deleteMany?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
  }

  export type NewsArticleLikeUpdateManyWithoutLikerNestedInput = {
    create?: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput> | NewsArticleLikeCreateWithoutLikerInput[] | NewsArticleLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutLikerInput | NewsArticleLikeCreateOrConnectWithoutLikerInput[]
    upsert?: NewsArticleLikeUpsertWithWhereUniqueWithoutLikerInput | NewsArticleLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: NewsArticleLikeCreateManyLikerInputEnvelope
    set?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    disconnect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    delete?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    update?: NewsArticleLikeUpdateWithWhereUniqueWithoutLikerInput | NewsArticleLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: NewsArticleLikeUpdateManyWithWhereWithoutLikerInput | NewsArticleLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
  }

  export type NewsLetterUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput> | NewsLetterCreateWithoutAuthorInput[] | NewsLetterUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsLetterCreateOrConnectWithoutAuthorInput | NewsLetterCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsLetterUpsertWithWhereUniqueWithoutAuthorInput | NewsLetterUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsLetterCreateManyAuthorInputEnvelope
    set?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    disconnect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    delete?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    connect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    update?: NewsLetterUpdateWithWhereUniqueWithoutAuthorInput | NewsLetterUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsLetterUpdateManyWithWhereWithoutAuthorInput | NewsLetterUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsLetterScalarWhereInput | NewsLetterScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUserInput | EmployeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUserInput | EmployeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUserInput | EmployeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput> | NewsArticleCreateWithoutAuthorInput[] | NewsArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutAuthorInput | NewsArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutAuthorInput | NewsArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsArticleCreateManyAuthorInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutAuthorInput | NewsArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutAuthorInput | NewsArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput = {
    create?: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput> | NewsCommentCreateWithoutCommenterInput[] | NewsCommentUncheckedCreateWithoutCommenterInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutCommenterInput | NewsCommentCreateOrConnectWithoutCommenterInput[]
    upsert?: NewsCommentUpsertWithWhereUniqueWithoutCommenterInput | NewsCommentUpsertWithWhereUniqueWithoutCommenterInput[]
    createMany?: NewsCommentCreateManyCommenterInputEnvelope
    set?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    disconnect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    delete?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    update?: NewsCommentUpdateWithWhereUniqueWithoutCommenterInput | NewsCommentUpdateWithWhereUniqueWithoutCommenterInput[]
    updateMany?: NewsCommentUpdateManyWithWhereWithoutCommenterInput | NewsCommentUpdateManyWithWhereWithoutCommenterInput[]
    deleteMany?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
  }

  export type NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput = {
    create?: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput> | NewsArticleLikeCreateWithoutLikerInput[] | NewsArticleLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutLikerInput | NewsArticleLikeCreateOrConnectWithoutLikerInput[]
    upsert?: NewsArticleLikeUpsertWithWhereUniqueWithoutLikerInput | NewsArticleLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: NewsArticleLikeCreateManyLikerInputEnvelope
    set?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    disconnect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    delete?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    update?: NewsArticleLikeUpdateWithWhereUniqueWithoutLikerInput | NewsArticleLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: NewsArticleLikeUpdateManyWithWhereWithoutLikerInput | NewsArticleLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
  }

  export type NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput> | NewsLetterCreateWithoutAuthorInput[] | NewsLetterUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsLetterCreateOrConnectWithoutAuthorInput | NewsLetterCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsLetterUpsertWithWhereUniqueWithoutAuthorInput | NewsLetterUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsLetterCreateManyAuthorInputEnvelope
    set?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    disconnect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    delete?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    connect?: NewsLetterWhereUniqueInput | NewsLetterWhereUniqueInput[]
    update?: NewsLetterUpdateWithWhereUniqueWithoutAuthorInput | NewsLetterUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsLetterUpdateManyWithWhereWithoutAuthorInput | NewsLetterUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsLetterScalarWhereInput | NewsLetterScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUserInput | EmployeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUserInput | EmployeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUserInput | EmployeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutDepartMentsInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentsInput, EmployeeUncheckedCreateWithoutDepartMentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type DepartMentalSectorCreateNestedManyWithoutDepartMentInput = {
    create?: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput> | DepartMentalSectorCreateWithoutDepartMentInput[] | DepartMentalSectorUncheckedCreateWithoutDepartMentInput[]
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutDepartMentInput | DepartMentalSectorCreateOrConnectWithoutDepartMentInput[]
    createMany?: DepartMentalSectorCreateManyDepartMentInputEnvelope
    connect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
  }

  export type DepartMentalSectorUncheckedCreateNestedManyWithoutDepartMentInput = {
    create?: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput> | DepartMentalSectorCreateWithoutDepartMentInput[] | DepartMentalSectorUncheckedCreateWithoutDepartMentInput[]
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutDepartMentInput | DepartMentalSectorCreateOrConnectWithoutDepartMentInput[]
    createMany?: DepartMentalSectorCreateManyDepartMentInputEnvelope
    connect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
  }

  export type EmployeeUpdateOneWithoutDepartMentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentsInput, EmployeeUncheckedCreateWithoutDepartMentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentsInput
    upsert?: EmployeeUpsertWithoutDepartMentsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDepartMentsInput, EmployeeUpdateWithoutDepartMentsInput>, EmployeeUncheckedUpdateWithoutDepartMentsInput>
  }

  export type DepartMentalSectorUpdateManyWithoutDepartMentNestedInput = {
    create?: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput> | DepartMentalSectorCreateWithoutDepartMentInput[] | DepartMentalSectorUncheckedCreateWithoutDepartMentInput[]
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutDepartMentInput | DepartMentalSectorCreateOrConnectWithoutDepartMentInput[]
    upsert?: DepartMentalSectorUpsertWithWhereUniqueWithoutDepartMentInput | DepartMentalSectorUpsertWithWhereUniqueWithoutDepartMentInput[]
    createMany?: DepartMentalSectorCreateManyDepartMentInputEnvelope
    set?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    disconnect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    delete?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    connect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    update?: DepartMentalSectorUpdateWithWhereUniqueWithoutDepartMentInput | DepartMentalSectorUpdateWithWhereUniqueWithoutDepartMentInput[]
    updateMany?: DepartMentalSectorUpdateManyWithWhereWithoutDepartMentInput | DepartMentalSectorUpdateManyWithWhereWithoutDepartMentInput[]
    deleteMany?: DepartMentalSectorScalarWhereInput | DepartMentalSectorScalarWhereInput[]
  }

  export type DepartMentalSectorUncheckedUpdateManyWithoutDepartMentNestedInput = {
    create?: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput> | DepartMentalSectorCreateWithoutDepartMentInput[] | DepartMentalSectorUncheckedCreateWithoutDepartMentInput[]
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutDepartMentInput | DepartMentalSectorCreateOrConnectWithoutDepartMentInput[]
    upsert?: DepartMentalSectorUpsertWithWhereUniqueWithoutDepartMentInput | DepartMentalSectorUpsertWithWhereUniqueWithoutDepartMentInput[]
    createMany?: DepartMentalSectorCreateManyDepartMentInputEnvelope
    set?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    disconnect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    delete?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    connect?: DepartMentalSectorWhereUniqueInput | DepartMentalSectorWhereUniqueInput[]
    update?: DepartMentalSectorUpdateWithWhereUniqueWithoutDepartMentInput | DepartMentalSectorUpdateWithWhereUniqueWithoutDepartMentInput[]
    updateMany?: DepartMentalSectorUpdateManyWithWhereWithoutDepartMentInput | DepartMentalSectorUpdateManyWithWhereWithoutDepartMentInput[]
    deleteMany?: DepartMentalSectorScalarWhereInput | DepartMentalSectorScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutDepartMentalSectorInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput> | EmployeeCreateWithoutDepartMentalSectorInput[] | EmployeeUncheckedCreateWithoutDepartMentalSectorInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentalSectorInput | EmployeeCreateOrConnectWithoutDepartMentalSectorInput[]
    createMany?: EmployeeCreateManyDepartMentalSectorInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type DepartMentCreateNestedOneWithoutDepartmentalSectorsInput = {
    create?: XOR<DepartMentCreateWithoutDepartmentalSectorsInput, DepartMentUncheckedCreateWithoutDepartmentalSectorsInput>
    connectOrCreate?: DepartMentCreateOrConnectWithoutDepartmentalSectorsInput
    connect?: DepartMentWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartMentalSectorInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput> | EmployeeCreateWithoutDepartMentalSectorInput[] | EmployeeUncheckedCreateWithoutDepartMentalSectorInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentalSectorInput | EmployeeCreateOrConnectWithoutDepartMentalSectorInput[]
    createMany?: EmployeeCreateManyDepartMentalSectorInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateManyWithoutDepartMentalSectorNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput> | EmployeeCreateWithoutDepartMentalSectorInput[] | EmployeeUncheckedCreateWithoutDepartMentalSectorInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentalSectorInput | EmployeeCreateOrConnectWithoutDepartMentalSectorInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartMentalSectorInput | EmployeeUpsertWithWhereUniqueWithoutDepartMentalSectorInput[]
    createMany?: EmployeeCreateManyDepartMentalSectorInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartMentalSectorInput | EmployeeUpdateWithWhereUniqueWithoutDepartMentalSectorInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartMentalSectorInput | EmployeeUpdateManyWithWhereWithoutDepartMentalSectorInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DepartMentUpdateOneWithoutDepartmentalSectorsNestedInput = {
    create?: XOR<DepartMentCreateWithoutDepartmentalSectorsInput, DepartMentUncheckedCreateWithoutDepartmentalSectorsInput>
    connectOrCreate?: DepartMentCreateOrConnectWithoutDepartmentalSectorsInput
    upsert?: DepartMentUpsertWithoutDepartmentalSectorsInput
    disconnect?: DepartMentWhereInput | boolean
    delete?: DepartMentWhereInput | boolean
    connect?: DepartMentWhereUniqueInput
    update?: XOR<XOR<DepartMentUpdateToOneWithWhereWithoutDepartmentalSectorsInput, DepartMentUpdateWithoutDepartmentalSectorsInput>, DepartMentUncheckedUpdateWithoutDepartmentalSectorsInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartMentalSectorNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput> | EmployeeCreateWithoutDepartMentalSectorInput[] | EmployeeUncheckedCreateWithoutDepartMentalSectorInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartMentalSectorInput | EmployeeCreateOrConnectWithoutDepartMentalSectorInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartMentalSectorInput | EmployeeUpsertWithWhereUniqueWithoutDepartMentalSectorInput[]
    createMany?: EmployeeCreateManyDepartMentalSectorInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartMentalSectorInput | EmployeeUpdateWithWhereUniqueWithoutDepartMentalSectorInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartMentalSectorInput | EmployeeUpdateManyWithWhereWithoutDepartMentalSectorInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type DepartMentCreateNestedManyWithoutHeadOfDepartmentInput = {
    create?: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput> | DepartMentCreateWithoutHeadOfDepartmentInput[] | DepartMentUncheckedCreateWithoutHeadOfDepartmentInput[]
    connectOrCreate?: DepartMentCreateOrConnectWithoutHeadOfDepartmentInput | DepartMentCreateOrConnectWithoutHeadOfDepartmentInput[]
    createMany?: DepartMentCreateManyHeadOfDepartmentInputEnvelope
    connect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
  }

  export type DepartMentalSectorCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartMentalSectorCreateWithoutEmployeesInput, DepartMentalSectorUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutEmployeesInput
    connect?: DepartMentalSectorWhereUniqueInput
  }

  export type DepartMentUncheckedCreateNestedManyWithoutHeadOfDepartmentInput = {
    create?: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput> | DepartMentCreateWithoutHeadOfDepartmentInput[] | DepartMentUncheckedCreateWithoutHeadOfDepartmentInput[]
    connectOrCreate?: DepartMentCreateOrConnectWithoutHeadOfDepartmentInput | DepartMentCreateOrConnectWithoutHeadOfDepartmentInput[]
    createMany?: DepartMentCreateManyHeadOfDepartmentInputEnvelope
    connect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartMentUpdateManyWithoutHeadOfDepartmentNestedInput = {
    create?: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput> | DepartMentCreateWithoutHeadOfDepartmentInput[] | DepartMentUncheckedCreateWithoutHeadOfDepartmentInput[]
    connectOrCreate?: DepartMentCreateOrConnectWithoutHeadOfDepartmentInput | DepartMentCreateOrConnectWithoutHeadOfDepartmentInput[]
    upsert?: DepartMentUpsertWithWhereUniqueWithoutHeadOfDepartmentInput | DepartMentUpsertWithWhereUniqueWithoutHeadOfDepartmentInput[]
    createMany?: DepartMentCreateManyHeadOfDepartmentInputEnvelope
    set?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    disconnect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    delete?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    connect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    update?: DepartMentUpdateWithWhereUniqueWithoutHeadOfDepartmentInput | DepartMentUpdateWithWhereUniqueWithoutHeadOfDepartmentInput[]
    updateMany?: DepartMentUpdateManyWithWhereWithoutHeadOfDepartmentInput | DepartMentUpdateManyWithWhereWithoutHeadOfDepartmentInput[]
    deleteMany?: DepartMentScalarWhereInput | DepartMentScalarWhereInput[]
  }

  export type DepartMentalSectorUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<DepartMentalSectorCreateWithoutEmployeesInput, DepartMentalSectorUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartMentalSectorCreateOrConnectWithoutEmployeesInput
    upsert?: DepartMentalSectorUpsertWithoutEmployeesInput
    disconnect?: DepartMentalSectorWhereInput | boolean
    delete?: DepartMentalSectorWhereInput | boolean
    connect?: DepartMentalSectorWhereUniqueInput
    update?: XOR<XOR<DepartMentalSectorUpdateToOneWithWhereWithoutEmployeesInput, DepartMentalSectorUpdateWithoutEmployeesInput>, DepartMentalSectorUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentNestedInput = {
    create?: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput> | DepartMentCreateWithoutHeadOfDepartmentInput[] | DepartMentUncheckedCreateWithoutHeadOfDepartmentInput[]
    connectOrCreate?: DepartMentCreateOrConnectWithoutHeadOfDepartmentInput | DepartMentCreateOrConnectWithoutHeadOfDepartmentInput[]
    upsert?: DepartMentUpsertWithWhereUniqueWithoutHeadOfDepartmentInput | DepartMentUpsertWithWhereUniqueWithoutHeadOfDepartmentInput[]
    createMany?: DepartMentCreateManyHeadOfDepartmentInputEnvelope
    set?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    disconnect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    delete?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    connect?: DepartMentWhereUniqueInput | DepartMentWhereUniqueInput[]
    update?: DepartMentUpdateWithWhereUniqueWithoutHeadOfDepartmentInput | DepartMentUpdateWithWhereUniqueWithoutHeadOfDepartmentInput[]
    updateMany?: DepartMentUpdateManyWithWhereWithoutHeadOfDepartmentInput | DepartMentUpdateManyWithWhereWithoutHeadOfDepartmentInput[]
    deleteMany?: DepartMentScalarWhereInput | DepartMentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: UserUpsertWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput, UserUpdateWithoutEmailVerificationTokensInput>, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutNewsLettersInput = {
    create?: XOR<UserCreateWithoutNewsLettersInput, UserUncheckedCreateWithoutNewsLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsLettersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsLettersNestedInput = {
    create?: XOR<UserCreateWithoutNewsLettersInput, UserUncheckedCreateWithoutNewsLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsLettersInput
    upsert?: UserUpsertWithoutNewsLettersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsLettersInput, UserUpdateWithoutNewsLettersInput>, UserUncheckedUpdateWithoutNewsLettersInput>
  }

  export type UserCreateNestedOneWithoutNewsArticlesInput = {
    create?: XOR<UserCreateWithoutNewsArticlesInput, UserUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type NewsCommentCreateNestedManyWithoutNewsArticleInput = {
    create?: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput> | NewsCommentCreateWithoutNewsArticleInput[] | NewsCommentUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutNewsArticleInput | NewsCommentCreateOrConnectWithoutNewsArticleInput[]
    createMany?: NewsCommentCreateManyNewsArticleInputEnvelope
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
  }

  export type NewsArticleLikeCreateNestedManyWithoutNewsArticleInput = {
    create?: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput> | NewsArticleLikeCreateWithoutNewsArticleInput[] | NewsArticleLikeUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutNewsArticleInput | NewsArticleLikeCreateOrConnectWithoutNewsArticleInput[]
    createMany?: NewsArticleLikeCreateManyNewsArticleInputEnvelope
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
  }

  export type NewsCommentUncheckedCreateNestedManyWithoutNewsArticleInput = {
    create?: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput> | NewsCommentCreateWithoutNewsArticleInput[] | NewsCommentUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutNewsArticleInput | NewsCommentCreateOrConnectWithoutNewsArticleInput[]
    createMany?: NewsCommentCreateManyNewsArticleInputEnvelope
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
  }

  export type NewsArticleLikeUncheckedCreateNestedManyWithoutNewsArticleInput = {
    create?: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput> | NewsArticleLikeCreateWithoutNewsArticleInput[] | NewsArticleLikeUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutNewsArticleInput | NewsArticleLikeCreateOrConnectWithoutNewsArticleInput[]
    createMany?: NewsArticleLikeCreateManyNewsArticleInputEnvelope
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNewsArticlesNestedInput = {
    create?: XOR<UserCreateWithoutNewsArticlesInput, UserUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsArticlesInput
    upsert?: UserUpsertWithoutNewsArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsArticlesInput, UserUpdateWithoutNewsArticlesInput>, UserUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type NewsCommentUpdateManyWithoutNewsArticleNestedInput = {
    create?: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput> | NewsCommentCreateWithoutNewsArticleInput[] | NewsCommentUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutNewsArticleInput | NewsCommentCreateOrConnectWithoutNewsArticleInput[]
    upsert?: NewsCommentUpsertWithWhereUniqueWithoutNewsArticleInput | NewsCommentUpsertWithWhereUniqueWithoutNewsArticleInput[]
    createMany?: NewsCommentCreateManyNewsArticleInputEnvelope
    set?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    disconnect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    delete?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    update?: NewsCommentUpdateWithWhereUniqueWithoutNewsArticleInput | NewsCommentUpdateWithWhereUniqueWithoutNewsArticleInput[]
    updateMany?: NewsCommentUpdateManyWithWhereWithoutNewsArticleInput | NewsCommentUpdateManyWithWhereWithoutNewsArticleInput[]
    deleteMany?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
  }

  export type NewsArticleLikeUpdateManyWithoutNewsArticleNestedInput = {
    create?: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput> | NewsArticleLikeCreateWithoutNewsArticleInput[] | NewsArticleLikeUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutNewsArticleInput | NewsArticleLikeCreateOrConnectWithoutNewsArticleInput[]
    upsert?: NewsArticleLikeUpsertWithWhereUniqueWithoutNewsArticleInput | NewsArticleLikeUpsertWithWhereUniqueWithoutNewsArticleInput[]
    createMany?: NewsArticleLikeCreateManyNewsArticleInputEnvelope
    set?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    disconnect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    delete?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    update?: NewsArticleLikeUpdateWithWhereUniqueWithoutNewsArticleInput | NewsArticleLikeUpdateWithWhereUniqueWithoutNewsArticleInput[]
    updateMany?: NewsArticleLikeUpdateManyWithWhereWithoutNewsArticleInput | NewsArticleLikeUpdateManyWithWhereWithoutNewsArticleInput[]
    deleteMany?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
  }

  export type NewsCommentUncheckedUpdateManyWithoutNewsArticleNestedInput = {
    create?: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput> | NewsCommentCreateWithoutNewsArticleInput[] | NewsCommentUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsCommentCreateOrConnectWithoutNewsArticleInput | NewsCommentCreateOrConnectWithoutNewsArticleInput[]
    upsert?: NewsCommentUpsertWithWhereUniqueWithoutNewsArticleInput | NewsCommentUpsertWithWhereUniqueWithoutNewsArticleInput[]
    createMany?: NewsCommentCreateManyNewsArticleInputEnvelope
    set?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    disconnect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    delete?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    connect?: NewsCommentWhereUniqueInput | NewsCommentWhereUniqueInput[]
    update?: NewsCommentUpdateWithWhereUniqueWithoutNewsArticleInput | NewsCommentUpdateWithWhereUniqueWithoutNewsArticleInput[]
    updateMany?: NewsCommentUpdateManyWithWhereWithoutNewsArticleInput | NewsCommentUpdateManyWithWhereWithoutNewsArticleInput[]
    deleteMany?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
  }

  export type NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleNestedInput = {
    create?: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput> | NewsArticleLikeCreateWithoutNewsArticleInput[] | NewsArticleLikeUncheckedCreateWithoutNewsArticleInput[]
    connectOrCreate?: NewsArticleLikeCreateOrConnectWithoutNewsArticleInput | NewsArticleLikeCreateOrConnectWithoutNewsArticleInput[]
    upsert?: NewsArticleLikeUpsertWithWhereUniqueWithoutNewsArticleInput | NewsArticleLikeUpsertWithWhereUniqueWithoutNewsArticleInput[]
    createMany?: NewsArticleLikeCreateManyNewsArticleInputEnvelope
    set?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    disconnect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    delete?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    connect?: NewsArticleLikeWhereUniqueInput | NewsArticleLikeWhereUniqueInput[]
    update?: NewsArticleLikeUpdateWithWhereUniqueWithoutNewsArticleInput | NewsArticleLikeUpdateWithWhereUniqueWithoutNewsArticleInput[]
    updateMany?: NewsArticleLikeUpdateManyWithWhereWithoutNewsArticleInput | NewsArticleLikeUpdateManyWithWhereWithoutNewsArticleInput[]
    deleteMany?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNewsCommentsInput = {
    create?: XOR<UserCreateWithoutNewsCommentsInput, UserUncheckedCreateWithoutNewsCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type NewsArticleCreateNestedOneWithoutNewsCommentsInput = {
    create?: XOR<NewsArticleCreateWithoutNewsCommentsInput, NewsArticleUncheckedCreateWithoutNewsCommentsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutNewsCommentsInput
    connect?: NewsArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsCommentsNestedInput = {
    create?: XOR<UserCreateWithoutNewsCommentsInput, UserUncheckedCreateWithoutNewsCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsCommentsInput
    upsert?: UserUpsertWithoutNewsCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsCommentsInput, UserUpdateWithoutNewsCommentsInput>, UserUncheckedUpdateWithoutNewsCommentsInput>
  }

  export type NewsArticleUpdateOneRequiredWithoutNewsCommentsNestedInput = {
    create?: XOR<NewsArticleCreateWithoutNewsCommentsInput, NewsArticleUncheckedCreateWithoutNewsCommentsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutNewsCommentsInput
    upsert?: NewsArticleUpsertWithoutNewsCommentsInput
    connect?: NewsArticleWhereUniqueInput
    update?: XOR<XOR<NewsArticleUpdateToOneWithWhereWithoutNewsCommentsInput, NewsArticleUpdateWithoutNewsCommentsInput>, NewsArticleUncheckedUpdateWithoutNewsCommentsInput>
  }

  export type UserCreateNestedOneWithoutNewsArticleLikesInput = {
    create?: XOR<UserCreateWithoutNewsArticleLikesInput, UserUncheckedCreateWithoutNewsArticleLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsArticleLikesInput
    connect?: UserWhereUniqueInput
  }

  export type NewsArticleCreateNestedOneWithoutNewsArticleLikesInput = {
    create?: XOR<NewsArticleCreateWithoutNewsArticleLikesInput, NewsArticleUncheckedCreateWithoutNewsArticleLikesInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutNewsArticleLikesInput
    connect?: NewsArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsArticleLikesNestedInput = {
    create?: XOR<UserCreateWithoutNewsArticleLikesInput, UserUncheckedCreateWithoutNewsArticleLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsArticleLikesInput
    upsert?: UserUpsertWithoutNewsArticleLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsArticleLikesInput, UserUpdateWithoutNewsArticleLikesInput>, UserUncheckedUpdateWithoutNewsArticleLikesInput>
  }

  export type NewsArticleUpdateOneRequiredWithoutNewsArticleLikesNestedInput = {
    create?: XOR<NewsArticleCreateWithoutNewsArticleLikesInput, NewsArticleUncheckedCreateWithoutNewsArticleLikesInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutNewsArticleLikesInput
    upsert?: NewsArticleUpsertWithoutNewsArticleLikesInput
    connect?: NewsArticleWhereUniqueInput
    update?: XOR<XOR<NewsArticleUpdateToOneWithWhereWithoutNewsArticleLikesInput, NewsArticleUpdateWithoutNewsArticleLikesInput>, NewsArticleUncheckedUpdateWithoutNewsArticleLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    expires: bigint | number
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    role?: $Enums.Role
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    role?: $Enums.Role
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleCreateWithoutAuthorInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    newsComments?: NewsCommentCreateNestedManyWithoutNewsArticleInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutNewsArticleInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput>
  }

  export type NewsArticleCreateManyAuthorInputEnvelope = {
    data: NewsArticleCreateManyAuthorInput | NewsArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NewsCommentCreateWithoutCommenterInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticle: NewsArticleCreateNestedOneWithoutNewsCommentsInput
  }

  export type NewsCommentUncheckedCreateWithoutCommenterInput = {
    id?: string
    content: string
    newsArticleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCommentCreateOrConnectWithoutCommenterInput = {
    where: NewsCommentWhereUniqueInput
    create: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput>
  }

  export type NewsCommentCreateManyCommenterInputEnvelope = {
    data: NewsCommentCreateManyCommenterInput | NewsCommentCreateManyCommenterInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleLikeCreateWithoutLikerInput = {
    id?: string
    createdAt?: Date | string
    newsArticle: NewsArticleCreateNestedOneWithoutNewsArticleLikesInput
  }

  export type NewsArticleLikeUncheckedCreateWithoutLikerInput = {
    id?: string
    newsArticleId: string
    createdAt?: Date | string
  }

  export type NewsArticleLikeCreateOrConnectWithoutLikerInput = {
    where: NewsArticleLikeWhereUniqueInput
    create: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput>
  }

  export type NewsArticleLikeCreateManyLikerInputEnvelope = {
    data: NewsArticleLikeCreateManyLikerInput | NewsArticleLikeCreateManyLikerInput[]
    skipDuplicates?: boolean
  }

  export type NewsLetterCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsLetterUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsLetterCreateOrConnectWithoutAuthorInput = {
    where: NewsLetterWhereUniqueInput
    create: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput>
  }

  export type NewsLetterCreateManyAuthorInputEnvelope = {
    data: NewsLetterCreateManyAuthorInput | NewsLetterCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMents?: DepartMentCreateNestedManyWithoutHeadOfDepartmentInput
    departMentalSector?: DepartMentalSectorCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMentalSectorId?: string | null
    departMents?: DepartMentUncheckedCreateNestedManyWithoutHeadOfDepartmentInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeCreateManyUserInputEnvelope = {
    data: EmployeeCreateManyUserInput | EmployeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutAuthorInput, NewsArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsArticleCreateWithoutAuthorInput, NewsArticleUncheckedCreateWithoutAuthorInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutAuthorInput, NewsArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    title?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    content?: StringFilter<"NewsArticle"> | string
    authorId?: StringFilter<"NewsArticle"> | string
    location?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }

  export type NewsCommentUpsertWithWhereUniqueWithoutCommenterInput = {
    where: NewsCommentWhereUniqueInput
    update: XOR<NewsCommentUpdateWithoutCommenterInput, NewsCommentUncheckedUpdateWithoutCommenterInput>
    create: XOR<NewsCommentCreateWithoutCommenterInput, NewsCommentUncheckedCreateWithoutCommenterInput>
  }

  export type NewsCommentUpdateWithWhereUniqueWithoutCommenterInput = {
    where: NewsCommentWhereUniqueInput
    data: XOR<NewsCommentUpdateWithoutCommenterInput, NewsCommentUncheckedUpdateWithoutCommenterInput>
  }

  export type NewsCommentUpdateManyWithWhereWithoutCommenterInput = {
    where: NewsCommentScalarWhereInput
    data: XOR<NewsCommentUpdateManyMutationInput, NewsCommentUncheckedUpdateManyWithoutCommenterInput>
  }

  export type NewsCommentScalarWhereInput = {
    AND?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
    OR?: NewsCommentScalarWhereInput[]
    NOT?: NewsCommentScalarWhereInput | NewsCommentScalarWhereInput[]
    id?: StringFilter<"NewsComment"> | string
    content?: StringFilter<"NewsComment"> | string
    commenterId?: StringFilter<"NewsComment"> | string
    newsArticleId?: StringFilter<"NewsComment"> | string
    createdAt?: DateTimeFilter<"NewsComment"> | Date | string
    updatedAt?: DateTimeFilter<"NewsComment"> | Date | string
  }

  export type NewsArticleLikeUpsertWithWhereUniqueWithoutLikerInput = {
    where: NewsArticleLikeWhereUniqueInput
    update: XOR<NewsArticleLikeUpdateWithoutLikerInput, NewsArticleLikeUncheckedUpdateWithoutLikerInput>
    create: XOR<NewsArticleLikeCreateWithoutLikerInput, NewsArticleLikeUncheckedCreateWithoutLikerInput>
  }

  export type NewsArticleLikeUpdateWithWhereUniqueWithoutLikerInput = {
    where: NewsArticleLikeWhereUniqueInput
    data: XOR<NewsArticleLikeUpdateWithoutLikerInput, NewsArticleLikeUncheckedUpdateWithoutLikerInput>
  }

  export type NewsArticleLikeUpdateManyWithWhereWithoutLikerInput = {
    where: NewsArticleLikeScalarWhereInput
    data: XOR<NewsArticleLikeUpdateManyMutationInput, NewsArticleLikeUncheckedUpdateManyWithoutLikerInput>
  }

  export type NewsArticleLikeScalarWhereInput = {
    AND?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
    OR?: NewsArticleLikeScalarWhereInput[]
    NOT?: NewsArticleLikeScalarWhereInput | NewsArticleLikeScalarWhereInput[]
    id?: StringFilter<"NewsArticleLike"> | string
    likerId?: StringFilter<"NewsArticleLike"> | string
    newsArticleId?: StringFilter<"NewsArticleLike"> | string
    createdAt?: DateTimeFilter<"NewsArticleLike"> | Date | string
  }

  export type NewsLetterUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsLetterWhereUniqueInput
    update: XOR<NewsLetterUpdateWithoutAuthorInput, NewsLetterUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsLetterCreateWithoutAuthorInput, NewsLetterUncheckedCreateWithoutAuthorInput>
  }

  export type NewsLetterUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsLetterWhereUniqueInput
    data: XOR<NewsLetterUpdateWithoutAuthorInput, NewsLetterUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsLetterUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsLetterScalarWhereInput
    data: XOR<NewsLetterUpdateManyMutationInput, NewsLetterUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsLetterScalarWhereInput = {
    AND?: NewsLetterScalarWhereInput | NewsLetterScalarWhereInput[]
    OR?: NewsLetterScalarWhereInput[]
    NOT?: NewsLetterScalarWhereInput | NewsLetterScalarWhereInput[]
    id?: StringFilter<"NewsLetter"> | string
    title?: StringFilter<"NewsLetter"> | string
    content?: StringFilter<"NewsLetter"> | string
    description?: StringFilter<"NewsLetter"> | string
    createdAt?: DateTimeFilter<"NewsLetter"> | Date | string
    updatedAt?: DateTimeFilter<"NewsLetter"> | Date | string
    authorId?: StringFilter<"NewsLetter"> | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    assumedOffice?: IntFilter<"Employee"> | number
    endedOffice?: IntNullableFilter<"Employee"> | number | null
    position?: StringFilter<"Employee"> | string
    hierarchy?: IntFilter<"Employee"> | number
    shortMessageToPublic?: StringNullableFilter<"Employee"> | string | null
    departMentalSectorId?: StringNullableFilter<"Employee"> | string | null
    userId?: StringFilter<"Employee"> | string
  }

  export type EmployeeCreateWithoutDepartMentsInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    user: UserCreateNestedOneWithoutEmployeesInput
    departMentalSector?: DepartMentalSectorCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutDepartMentsInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMentalSectorId?: string | null
    userId: string
  }

  export type EmployeeCreateOrConnectWithoutDepartMentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartMentsInput, EmployeeUncheckedCreateWithoutDepartMentsInput>
  }

  export type DepartMentalSectorCreateWithoutDepartMentInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    employees?: EmployeeCreateNestedManyWithoutDepartMentalSectorInput
  }

  export type DepartMentalSectorUncheckedCreateWithoutDepartMentInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartMentalSectorInput
  }

  export type DepartMentalSectorCreateOrConnectWithoutDepartMentInput = {
    where: DepartMentalSectorWhereUniqueInput
    create: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput>
  }

  export type DepartMentalSectorCreateManyDepartMentInputEnvelope = {
    data: DepartMentalSectorCreateManyDepartMentInput | DepartMentalSectorCreateManyDepartMentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutDepartMentsInput = {
    update: XOR<EmployeeUpdateWithoutDepartMentsInput, EmployeeUncheckedUpdateWithoutDepartMentsInput>
    create: XOR<EmployeeCreateWithoutDepartMentsInput, EmployeeUncheckedCreateWithoutDepartMentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDepartMentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDepartMentsInput, EmployeeUncheckedUpdateWithoutDepartMentsInput>
  }

  export type EmployeeUpdateWithoutDepartMentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmployeesNestedInput
    departMentalSector?: DepartMentalSectorUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartMentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMentalSectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartMentalSectorUpsertWithWhereUniqueWithoutDepartMentInput = {
    where: DepartMentalSectorWhereUniqueInput
    update: XOR<DepartMentalSectorUpdateWithoutDepartMentInput, DepartMentalSectorUncheckedUpdateWithoutDepartMentInput>
    create: XOR<DepartMentalSectorCreateWithoutDepartMentInput, DepartMentalSectorUncheckedCreateWithoutDepartMentInput>
  }

  export type DepartMentalSectorUpdateWithWhereUniqueWithoutDepartMentInput = {
    where: DepartMentalSectorWhereUniqueInput
    data: XOR<DepartMentalSectorUpdateWithoutDepartMentInput, DepartMentalSectorUncheckedUpdateWithoutDepartMentInput>
  }

  export type DepartMentalSectorUpdateManyWithWhereWithoutDepartMentInput = {
    where: DepartMentalSectorScalarWhereInput
    data: XOR<DepartMentalSectorUpdateManyMutationInput, DepartMentalSectorUncheckedUpdateManyWithoutDepartMentInput>
  }

  export type DepartMentalSectorScalarWhereInput = {
    AND?: DepartMentalSectorScalarWhereInput | DepartMentalSectorScalarWhereInput[]
    OR?: DepartMentalSectorScalarWhereInput[]
    NOT?: DepartMentalSectorScalarWhereInput | DepartMentalSectorScalarWhereInput[]
    id?: StringFilter<"DepartMentalSector"> | string
    name?: StringFilter<"DepartMentalSector"> | string
    description?: StringNullableFilter<"DepartMentalSector"> | string | null
    hierarchy?: IntFilter<"DepartMentalSector"> | number
    departMentId?: StringNullableFilter<"DepartMentalSector"> | string | null
  }

  export type EmployeeCreateWithoutDepartMentalSectorInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    user: UserCreateNestedOneWithoutEmployeesInput
    departMents?: DepartMentCreateNestedManyWithoutHeadOfDepartmentInput
  }

  export type EmployeeUncheckedCreateWithoutDepartMentalSectorInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    userId: string
    departMents?: DepartMentUncheckedCreateNestedManyWithoutHeadOfDepartmentInput
  }

  export type EmployeeCreateOrConnectWithoutDepartMentalSectorInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput>
  }

  export type EmployeeCreateManyDepartMentalSectorInputEnvelope = {
    data: EmployeeCreateManyDepartMentalSectorInput | EmployeeCreateManyDepartMentalSectorInput[]
    skipDuplicates?: boolean
  }

  export type DepartMentCreateWithoutDepartmentalSectorsInput = {
    id?: string
    name: string
    about?: string | null
    headOfDepartment?: EmployeeCreateNestedOneWithoutDepartMentsInput
  }

  export type DepartMentUncheckedCreateWithoutDepartmentalSectorsInput = {
    id?: string
    name: string
    about?: string | null
    headOfDepartmentId?: string | null
  }

  export type DepartMentCreateOrConnectWithoutDepartmentalSectorsInput = {
    where: DepartMentWhereUniqueInput
    create: XOR<DepartMentCreateWithoutDepartmentalSectorsInput, DepartMentUncheckedCreateWithoutDepartmentalSectorsInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartMentalSectorInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartMentalSectorInput, EmployeeUncheckedUpdateWithoutDepartMentalSectorInput>
    create: XOR<EmployeeCreateWithoutDepartMentalSectorInput, EmployeeUncheckedCreateWithoutDepartMentalSectorInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartMentalSectorInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartMentalSectorInput, EmployeeUncheckedUpdateWithoutDepartMentalSectorInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartMentalSectorInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartMentalSectorInput>
  }

  export type DepartMentUpsertWithoutDepartmentalSectorsInput = {
    update: XOR<DepartMentUpdateWithoutDepartmentalSectorsInput, DepartMentUncheckedUpdateWithoutDepartmentalSectorsInput>
    create: XOR<DepartMentCreateWithoutDepartmentalSectorsInput, DepartMentUncheckedCreateWithoutDepartmentalSectorsInput>
    where?: DepartMentWhereInput
  }

  export type DepartMentUpdateToOneWithWhereWithoutDepartmentalSectorsInput = {
    where?: DepartMentWhereInput
    data: XOR<DepartMentUpdateWithoutDepartmentalSectorsInput, DepartMentUncheckedUpdateWithoutDepartmentalSectorsInput>
  }

  export type DepartMentUpdateWithoutDepartmentalSectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    headOfDepartment?: EmployeeUpdateOneWithoutDepartMentsNestedInput
  }

  export type DepartMentUncheckedUpdateWithoutDepartmentalSectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    headOfDepartmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutEmployeesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type DepartMentCreateWithoutHeadOfDepartmentInput = {
    id?: string
    name: string
    about?: string | null
    departmentalSectors?: DepartMentalSectorCreateNestedManyWithoutDepartMentInput
  }

  export type DepartMentUncheckedCreateWithoutHeadOfDepartmentInput = {
    id?: string
    name: string
    about?: string | null
    departmentalSectors?: DepartMentalSectorUncheckedCreateNestedManyWithoutDepartMentInput
  }

  export type DepartMentCreateOrConnectWithoutHeadOfDepartmentInput = {
    where: DepartMentWhereUniqueInput
    create: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput>
  }

  export type DepartMentCreateManyHeadOfDepartmentInputEnvelope = {
    data: DepartMentCreateManyHeadOfDepartmentInput | DepartMentCreateManyHeadOfDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DepartMentalSectorCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    departMent?: DepartMentCreateNestedOneWithoutDepartmentalSectorsInput
  }

  export type DepartMentalSectorUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
    departMentId?: string | null
  }

  export type DepartMentalSectorCreateOrConnectWithoutEmployeesInput = {
    where: DepartMentalSectorWhereUniqueInput
    create: XOR<DepartMentalSectorCreateWithoutEmployeesInput, DepartMentalSectorUncheckedCreateWithoutEmployeesInput>
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DepartMentUpsertWithWhereUniqueWithoutHeadOfDepartmentInput = {
    where: DepartMentWhereUniqueInput
    update: XOR<DepartMentUpdateWithoutHeadOfDepartmentInput, DepartMentUncheckedUpdateWithoutHeadOfDepartmentInput>
    create: XOR<DepartMentCreateWithoutHeadOfDepartmentInput, DepartMentUncheckedCreateWithoutHeadOfDepartmentInput>
  }

  export type DepartMentUpdateWithWhereUniqueWithoutHeadOfDepartmentInput = {
    where: DepartMentWhereUniqueInput
    data: XOR<DepartMentUpdateWithoutHeadOfDepartmentInput, DepartMentUncheckedUpdateWithoutHeadOfDepartmentInput>
  }

  export type DepartMentUpdateManyWithWhereWithoutHeadOfDepartmentInput = {
    where: DepartMentScalarWhereInput
    data: XOR<DepartMentUpdateManyMutationInput, DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentInput>
  }

  export type DepartMentScalarWhereInput = {
    AND?: DepartMentScalarWhereInput | DepartMentScalarWhereInput[]
    OR?: DepartMentScalarWhereInput[]
    NOT?: DepartMentScalarWhereInput | DepartMentScalarWhereInput[]
    id?: StringFilter<"DepartMent"> | string
    name?: StringFilter<"DepartMent"> | string
    about?: StringNullableFilter<"DepartMent"> | string | null
    headOfDepartmentId?: StringNullableFilter<"DepartMent"> | string | null
  }

  export type DepartMentalSectorUpsertWithoutEmployeesInput = {
    update: XOR<DepartMentalSectorUpdateWithoutEmployeesInput, DepartMentalSectorUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartMentalSectorCreateWithoutEmployeesInput, DepartMentalSectorUncheckedCreateWithoutEmployeesInput>
    where?: DepartMentalSectorWhereInput
  }

  export type DepartMentalSectorUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartMentalSectorWhereInput
    data: XOR<DepartMentalSectorUpdateWithoutEmployeesInput, DepartMentalSectorUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartMentalSectorUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    departMent?: DepartMentUpdateOneWithoutDepartmentalSectorsNestedInput
  }

  export type DepartMentalSectorUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    departMentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutEmailVerificationTokensInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type UserUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewsLettersInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsLettersInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsLettersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsLettersInput, UserUncheckedCreateWithoutNewsLettersInput>
  }

  export type UserUpsertWithoutNewsLettersInput = {
    update: XOR<UserUpdateWithoutNewsLettersInput, UserUncheckedUpdateWithoutNewsLettersInput>
    create: XOR<UserCreateWithoutNewsLettersInput, UserUncheckedCreateWithoutNewsLettersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsLettersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsLettersInput, UserUncheckedUpdateWithoutNewsLettersInput>
  }

  export type UserUpdateWithoutNewsLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewsArticlesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsArticlesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsArticlesInput, UserUncheckedCreateWithoutNewsArticlesInput>
  }

  export type NewsCommentCreateWithoutNewsArticleInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commenter: UserCreateNestedOneWithoutNewsCommentsInput
  }

  export type NewsCommentUncheckedCreateWithoutNewsArticleInput = {
    id?: string
    content: string
    commenterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCommentCreateOrConnectWithoutNewsArticleInput = {
    where: NewsCommentWhereUniqueInput
    create: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput>
  }

  export type NewsCommentCreateManyNewsArticleInputEnvelope = {
    data: NewsCommentCreateManyNewsArticleInput | NewsCommentCreateManyNewsArticleInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleLikeCreateWithoutNewsArticleInput = {
    id?: string
    createdAt?: Date | string
    liker: UserCreateNestedOneWithoutNewsArticleLikesInput
  }

  export type NewsArticleLikeUncheckedCreateWithoutNewsArticleInput = {
    id?: string
    likerId: string
    createdAt?: Date | string
  }

  export type NewsArticleLikeCreateOrConnectWithoutNewsArticleInput = {
    where: NewsArticleLikeWhereUniqueInput
    create: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput>
  }

  export type NewsArticleLikeCreateManyNewsArticleInputEnvelope = {
    data: NewsArticleLikeCreateManyNewsArticleInput | NewsArticleLikeCreateManyNewsArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNewsArticlesInput = {
    update: XOR<UserUpdateWithoutNewsArticlesInput, UserUncheckedUpdateWithoutNewsArticlesInput>
    create: XOR<UserCreateWithoutNewsArticlesInput, UserUncheckedCreateWithoutNewsArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsArticlesInput, UserUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type UserUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsCommentUpsertWithWhereUniqueWithoutNewsArticleInput = {
    where: NewsCommentWhereUniqueInput
    update: XOR<NewsCommentUpdateWithoutNewsArticleInput, NewsCommentUncheckedUpdateWithoutNewsArticleInput>
    create: XOR<NewsCommentCreateWithoutNewsArticleInput, NewsCommentUncheckedCreateWithoutNewsArticleInput>
  }

  export type NewsCommentUpdateWithWhereUniqueWithoutNewsArticleInput = {
    where: NewsCommentWhereUniqueInput
    data: XOR<NewsCommentUpdateWithoutNewsArticleInput, NewsCommentUncheckedUpdateWithoutNewsArticleInput>
  }

  export type NewsCommentUpdateManyWithWhereWithoutNewsArticleInput = {
    where: NewsCommentScalarWhereInput
    data: XOR<NewsCommentUpdateManyMutationInput, NewsCommentUncheckedUpdateManyWithoutNewsArticleInput>
  }

  export type NewsArticleLikeUpsertWithWhereUniqueWithoutNewsArticleInput = {
    where: NewsArticleLikeWhereUniqueInput
    update: XOR<NewsArticleLikeUpdateWithoutNewsArticleInput, NewsArticleLikeUncheckedUpdateWithoutNewsArticleInput>
    create: XOR<NewsArticleLikeCreateWithoutNewsArticleInput, NewsArticleLikeUncheckedCreateWithoutNewsArticleInput>
  }

  export type NewsArticleLikeUpdateWithWhereUniqueWithoutNewsArticleInput = {
    where: NewsArticleLikeWhereUniqueInput
    data: XOR<NewsArticleLikeUpdateWithoutNewsArticleInput, NewsArticleLikeUncheckedUpdateWithoutNewsArticleInput>
  }

  export type NewsArticleLikeUpdateManyWithWhereWithoutNewsArticleInput = {
    where: NewsArticleLikeScalarWhereInput
    data: XOR<NewsArticleLikeUpdateManyMutationInput, NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleInput>
  }

  export type UserCreateWithoutNewsCommentsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsCommentsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutLikerInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsCommentsInput, UserUncheckedCreateWithoutNewsCommentsInput>
  }

  export type NewsArticleCreateWithoutNewsCommentsInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsArticlesInput
    newsArticleLikes?: NewsArticleLikeCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutNewsCommentsInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    authorId: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    newsArticleLikes?: NewsArticleLikeUncheckedCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutNewsCommentsInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutNewsCommentsInput, NewsArticleUncheckedCreateWithoutNewsCommentsInput>
  }

  export type UserUpsertWithoutNewsCommentsInput = {
    update: XOR<UserUpdateWithoutNewsCommentsInput, UserUncheckedUpdateWithoutNewsCommentsInput>
    create: XOR<UserCreateWithoutNewsCommentsInput, UserUncheckedCreateWithoutNewsCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsCommentsInput, UserUncheckedUpdateWithoutNewsCommentsInput>
  }

  export type UserUpdateWithoutNewsCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutLikerNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsArticleUpsertWithoutNewsCommentsInput = {
    update: XOR<NewsArticleUpdateWithoutNewsCommentsInput, NewsArticleUncheckedUpdateWithoutNewsCommentsInput>
    create: XOR<NewsArticleCreateWithoutNewsCommentsInput, NewsArticleUncheckedCreateWithoutNewsCommentsInput>
    where?: NewsArticleWhereInput
  }

  export type NewsArticleUpdateToOneWithWhereWithoutNewsCommentsInput = {
    where?: NewsArticleWhereInput
    data: XOR<NewsArticleUpdateWithoutNewsCommentsInput, NewsArticleUncheckedUpdateWithoutNewsCommentsInput>
  }

  export type NewsArticleUpdateWithoutNewsCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsArticlesNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutNewsCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleNestedInput
  }

  export type UserCreateWithoutNewsArticleLikesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentCreateNestedManyWithoutCommenterInput
    newsLetters?: NewsLetterCreateNestedManyWithoutAuthorInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsArticleLikesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role | null
    createdAt?: Date | string
    telephone?: string | null
    passwordHash?: string | null
    googleId?: string | null
    bio?: string | null
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutAuthorInput
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutCommenterInput
    newsLetters?: NewsLetterUncheckedCreateNestedManyWithoutAuthorInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsArticleLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsArticleLikesInput, UserUncheckedCreateWithoutNewsArticleLikesInput>
  }

  export type NewsArticleCreateWithoutNewsArticleLikesInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsArticlesInput
    newsComments?: NewsCommentCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutNewsArticleLikesInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    authorId: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    newsComments?: NewsCommentUncheckedCreateNestedManyWithoutNewsArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutNewsArticleLikesInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutNewsArticleLikesInput, NewsArticleUncheckedCreateWithoutNewsArticleLikesInput>
  }

  export type UserUpsertWithoutNewsArticleLikesInput = {
    update: XOR<UserUpdateWithoutNewsArticleLikesInput, UserUncheckedUpdateWithoutNewsArticleLikesInput>
    create: XOR<UserCreateWithoutNewsArticleLikesInput, UserUncheckedCreateWithoutNewsArticleLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsArticleLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsArticleLikesInput, UserUncheckedUpdateWithoutNewsArticleLikesInput>
  }

  export type UserUpdateWithoutNewsArticleLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUpdateManyWithoutCommenterNestedInput
    newsLetters?: NewsLetterUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsArticleLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutAuthorNestedInput
    newsComments?: NewsCommentUncheckedUpdateManyWithoutCommenterNestedInput
    newsLetters?: NewsLetterUncheckedUpdateManyWithoutAuthorNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsArticleUpsertWithoutNewsArticleLikesInput = {
    update: XOR<NewsArticleUpdateWithoutNewsArticleLikesInput, NewsArticleUncheckedUpdateWithoutNewsArticleLikesInput>
    create: XOR<NewsArticleCreateWithoutNewsArticleLikesInput, NewsArticleUncheckedCreateWithoutNewsArticleLikesInput>
    where?: NewsArticleWhereInput
  }

  export type NewsArticleUpdateToOneWithWhereWithoutNewsArticleLikesInput = {
    where?: NewsArticleWhereInput
    data: XOR<NewsArticleUpdateWithoutNewsArticleLikesInput, NewsArticleUncheckedUpdateWithoutNewsArticleLikesInput>
  }

  export type NewsArticleUpdateWithoutNewsArticleLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsArticlesNestedInput
    newsComments?: NewsCommentUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutNewsArticleLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsComments?: NewsCommentUncheckedUpdateManyWithoutNewsArticleNestedInput
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: string
    expires: bigint | number
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    role?: $Enums.Role
  }

  export type NewsArticleCreateManyAuthorInput = {
    id?: string
    imageUrl?: string | null
    title: string
    publishedAt?: Date | string
    content: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCommentCreateManyCommenterInput = {
    id?: string
    content: string
    newsArticleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleLikeCreateManyLikerInput = {
    id?: string
    newsArticleId: string
    createdAt?: Date | string
  }

  export type NewsLetterCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManyUserInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    departMentalSectorId?: string | null
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type NewsArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsComments?: NewsCommentUpdateManyWithoutNewsArticleNestedInput
    newsArticleLikes?: NewsArticleLikeUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsComments?: NewsCommentUncheckedUpdateManyWithoutNewsArticleNestedInput
    newsArticleLikes?: NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentUpdateWithoutCommenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: NewsArticleUpdateOneRequiredWithoutNewsCommentsNestedInput
  }

  export type NewsCommentUncheckedUpdateWithoutCommenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentUncheckedUpdateManyWithoutCommenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeUpdateWithoutLikerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsArticle?: NewsArticleUpdateOneRequiredWithoutNewsArticleLikesNestedInput
  }

  export type NewsArticleLikeUncheckedUpdateWithoutLikerInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeUncheckedUpdateManyWithoutLikerInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsArticleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsLetterUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMents?: DepartMentUpdateManyWithoutHeadOfDepartmentNestedInput
    departMentalSector?: DepartMentalSectorUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMentalSectorId?: NullableStringFieldUpdateOperationsInput | string | null
    departMents?: DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    departMentalSectorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartMentalSectorCreateManyDepartMentInput = {
    id?: string
    name: string
    description?: string | null
    hierarchy: number
  }

  export type DepartMentalSectorUpdateWithoutDepartMentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUpdateManyWithoutDepartMentalSectorNestedInput
  }

  export type DepartMentalSectorUncheckedUpdateWithoutDepartMentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutDepartMentalSectorNestedInput
  }

  export type DepartMentalSectorUncheckedUpdateManyWithoutDepartMentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hierarchy?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyDepartMentalSectorInput = {
    id?: string
    assumedOffice: number
    endedOffice?: number | null
    position: string
    hierarchy: number
    shortMessageToPublic?: string | null
    userId: string
  }

  export type EmployeeUpdateWithoutDepartMentalSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmployeesNestedInput
    departMents?: DepartMentUpdateManyWithoutHeadOfDepartmentNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartMentalSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    departMents?: DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartMentalSectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    assumedOffice?: IntFieldUpdateOperationsInput | number
    endedOffice?: NullableIntFieldUpdateOperationsInput | number | null
    position?: StringFieldUpdateOperationsInput | string
    hierarchy?: IntFieldUpdateOperationsInput | number
    shortMessageToPublic?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartMentCreateManyHeadOfDepartmentInput = {
    id?: string
    name: string
    about?: string | null
  }

  export type DepartMentUpdateWithoutHeadOfDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    departmentalSectors?: DepartMentalSectorUpdateManyWithoutDepartMentNestedInput
  }

  export type DepartMentUncheckedUpdateWithoutHeadOfDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    departmentalSectors?: DepartMentalSectorUncheckedUpdateManyWithoutDepartMentNestedInput
  }

  export type DepartMentUncheckedUpdateManyWithoutHeadOfDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsCommentCreateManyNewsArticleInput = {
    id?: string
    content: string
    commenterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleLikeCreateManyNewsArticleInput = {
    id?: string
    likerId: string
    createdAt?: Date | string
  }

  export type NewsCommentUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commenter?: UserUpdateOneRequiredWithoutNewsCommentsNestedInput
  }

  export type NewsCommentUncheckedUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    commenterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCommentUncheckedUpdateManyWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    commenterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liker?: UserUpdateOneRequiredWithoutNewsArticleLikesNestedInput
  }

  export type NewsArticleLikeUncheckedUpdateWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    likerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleLikeUncheckedUpdateManyWithoutNewsArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    likerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}