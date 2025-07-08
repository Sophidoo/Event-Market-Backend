
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
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model CategoryType
 * 
 */
export type CategoryType = $Result.DefaultSelection<Prisma.$CategoryTypePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model SavedItem
 * 
 */
export type SavedItem = $Result.DefaultSelection<Prisma.$SavedItemPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  VENDOR: 'VENDOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PROCESSED: 'PROCESSED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CARD: 'CARD',
  PAYSTACK: 'PAYSTACK',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Category: {
  RENTALS: 'RENTALS',
  SERVICES: 'SERVICES',
  PACKAGES: 'PACKAGES'
};

export type Category = (typeof Category)[keyof typeof Category]


export const PricingUnit: {
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH'
};

export type PricingUnit = (typeof PricingUnit)[keyof typeof PricingUnit]


export const BookingType: {
  INSTANT: 'INSTANT',
  REQUEST: 'REQUEST'
};

export type BookingType = (typeof BookingType)[keyof typeof BookingType]


export const BookingStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const BookingRequest: {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING'
};

export type BookingRequest = (typeof BookingRequest)[keyof typeof BookingRequest]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type PricingUnit = $Enums.PricingUnit

export const PricingUnit: typeof $Enums.PricingUnit

export type BookingType = $Enums.BookingType

export const BookingType: typeof $Enums.BookingType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type BookingRequest = $Enums.BookingRequest

export const BookingRequest: typeof $Enums.BookingRequest

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryType`: Exposes CRUD operations for the **CategoryType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryTypes
    * const categoryTypes = await prisma.categoryType.findMany()
    * ```
    */
  get categoryType(): Prisma.CategoryTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedItem`: Exposes CRUD operations for the **SavedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedItems
    * const savedItems = await prisma.savedItem.findMany()
    * ```
    */
  get savedItem(): Prisma.SavedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Vendor: 'Vendor',
    Item: 'Item',
    CategoryType: 'CategoryType',
    Review: 'Review',
    SavedItem: 'SavedItem',
    Booking: 'Booking',
    Payment: 'Payment'
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
      modelProps: "user" | "vendor" | "item" | "categoryType" | "review" | "savedItem" | "booking" | "payment"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VendorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VendorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      CategoryType: {
        payload: Prisma.$CategoryTypePayload<ExtArgs>
        fields: Prisma.CategoryTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          findFirst: {
            args: Prisma.CategoryTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          findMany: {
            args: Prisma.CategoryTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>[]
          }
          create: {
            args: Prisma.CategoryTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          createMany: {
            args: Prisma.CategoryTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          update: {
            args: Prisma.CategoryTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          deleteMany: {
            args: Prisma.CategoryTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTypePayload>
          }
          aggregate: {
            args: Prisma.CategoryTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryType>
          }
          groupBy: {
            args: Prisma.CategoryTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryTypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryTypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryTypeCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      SavedItem: {
        payload: Prisma.$SavedItemPayload<ExtArgs>
        fields: Prisma.SavedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          findFirst: {
            args: Prisma.SavedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          findMany: {
            args: Prisma.SavedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>[]
          }
          create: {
            args: Prisma.SavedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          createMany: {
            args: Prisma.SavedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          update: {
            args: Prisma.SavedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          deleteMany: {
            args: Prisma.SavedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedItemPayload>
          }
          aggregate: {
            args: Prisma.SavedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedItem>
          }
          groupBy: {
            args: Prisma.SavedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SavedItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SavedItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SavedItemCountArgs<ExtArgs>
            result: $Utils.Optional<SavedItemCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    vendor?: VendorOmit
    item?: ItemOmit
    categoryType?: CategoryTypeOmit
    review?: ReviewOmit
    savedItem?: SavedItemOmit
    booking?: BookingOmit
    payment?: PaymentOmit
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
    bookings: number
    reviews: number
    payments: number
    savedItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    savedItems?: boolean | UserCountOutputTypeCountSavedItemsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedItemWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    reviews: number
    items: number
    bookings: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | VendorCountOutputTypeCountReviewsArgs
    items?: boolean | VendorCountOutputTypeCountItemsArgs
    bookings?: boolean | VendorCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    savedBy: number
    reviews: number
    bookings: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | ItemCountOutputTypeCountSavedByArgs
    reviews?: boolean | ItemCountOutputTypeCountReviewsArgs
    bookings?: boolean | ItemCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedItemWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CategoryTypeCountOutputType
   */

  export type CategoryTypeCountOutputType = {
    items: number
  }

  export type CategoryTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CategoryTypeCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryTypeCountOutputType without action
   */
  export type CategoryTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTypeCountOutputType
     */
    select?: CategoryTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryTypeCountOutputType without action
   */
  export type CategoryTypeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
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
    profile: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    verified: boolean | null
    address: string | null
    city: string | null
    state: string | null
    token: string | null
    tokenExpires: Date | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profile: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    verified: boolean | null
    address: string | null
    city: string | null
    state: string | null
    token: string | null
    tokenExpires: Date | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profile: number
    email: number
    phone: number
    password: number
    role: number
    verified: number
    address: number
    city: number
    state: number
    token: number
    tokenExpires: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    profile?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    verified?: true
    address?: true
    city?: true
    state?: true
    token?: true
    tokenExpires?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profile?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    verified?: true
    address?: true
    city?: true
    state?: true
    token?: true
    tokenExpires?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profile?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    verified?: true
    address?: true
    city?: true
    state?: true
    token?: true
    tokenExpires?: true
    country?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    profile: string | null
    email: string
    phone: string
    password: string
    role: $Enums.Role
    verified: boolean
    address: string | null
    city: string | null
    state: string | null
    token: string | null
    tokenExpires: Date | null
    country: string | null
    createdAt: Date
    updatedAt: Date
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
    profile?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    verified?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    token?: boolean
    tokenExpires?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    savedItems?: boolean | User$savedItemsArgs<ExtArgs>
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    profile?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    verified?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    token?: boolean
    tokenExpires?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profile" | "email" | "phone" | "password" | "role" | "verified" | "address" | "city" | "state" | "token" | "tokenExpires" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    savedItems?: boolean | User$savedItemsArgs<ExtArgs>
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      savedItems: Prisma.$SavedItemPayload<ExtArgs>[]
      vendorProfile: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profile: string | null
      email: string
      phone: string
      password: string
      role: $Enums.Role
      verified: boolean
      address: string | null
      city: string | null
      state: string | null
      token: string | null
      tokenExpires: Date | null
      country: string | null
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedItems<T extends User$savedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly profile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly tokenExpires: FieldRef<"User", 'DateTime'>
    readonly country: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.savedItems
   */
  export type User$savedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    where?: SavedItemWhereInput
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    cursor?: SavedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedItemScalarFieldEnum | SavedItemScalarFieldEnum[]
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
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
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    rating: number | null
  }

  export type VendorSumAggregateOutputType = {
    rating: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    verified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    verified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    contactPhone: number
    contactEmail: number
    address: number
    city: number
    state: number
    country: number
    verified: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    rating?: true
  }

  export type VendorSumAggregateInputType = {
    rating?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    city?: true
    state?: true
    country?: true
    verified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    city?: true
    state?: true
    country?: true
    verified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    contactPhone?: true
    contactEmail?: true
    address?: true
    city?: true
    state?: true
    country?: true
    verified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    userId: string
    companyName: string | null
    contactPhone: string | null
    contactEmail: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    verified: boolean
    rating: number | null
    createdAt: Date
    updatedAt: Date | null
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    verified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Vendor$reviewsArgs<ExtArgs>
    items?: boolean | Vendor$itemsArgs<ExtArgs>
    bookings?: boolean | Vendor$bookingsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    verified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "contactPhone" | "contactEmail" | "address" | "city" | "state" | "country" | "verified" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Vendor$reviewsArgs<ExtArgs>
    items?: boolean | Vendor$itemsArgs<ExtArgs>
    bookings?: boolean | Vendor$bookingsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string | null
      contactPhone: string | null
      contactEmail: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      verified: boolean
      rating: number | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * @param {VendorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vendor = await prisma.vendor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VendorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vendor.
     * @param {VendorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vendor = await prisma.vendor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VendorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Vendor$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Vendor$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Vendor$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly userId: FieldRef<"Vendor", 'String'>
    readonly companyName: FieldRef<"Vendor", 'String'>
    readonly contactPhone: FieldRef<"Vendor", 'String'>
    readonly contactEmail: FieldRef<"Vendor", 'String'>
    readonly address: FieldRef<"Vendor", 'String'>
    readonly city: FieldRef<"Vendor", 'String'>
    readonly state: FieldRef<"Vendor", 'String'>
    readonly country: FieldRef<"Vendor", 'String'>
    readonly verified: FieldRef<"Vendor", 'Boolean'>
    readonly rating: FieldRef<"Vendor", 'Float'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor findRaw
   */
  export type VendorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendor aggregateRaw
   */
  export type VendorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendor.reviews
   */
  export type Vendor$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Vendor.items
   */
  export type Vendor$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Vendor.bookings
   */
  export type Vendor$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    minPrice: number | null
    avgRating: number | null
  }

  export type ItemSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    minPrice: number | null
    avgRating: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    quantity: number | null
    minPrice: number | null
    category: $Enums.Category | null
    pricingUnit: $Enums.PricingUnit | null
    isAvailable: boolean | null
    status: string | null
    nextAvailableDate: Date | null
    bookingType: $Enums.BookingType | null
    experience: string | null
    careerHighlight: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
    avgRating: number | null
    vendorId: string | null
    categoryId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    quantity: number | null
    minPrice: number | null
    category: $Enums.Category | null
    pricingUnit: $Enums.PricingUnit | null
    isAvailable: boolean | null
    status: string | null
    nextAvailableDate: Date | null
    bookingType: $Enums.BookingType | null
    experience: string | null
    careerHighlight: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
    avgRating: number | null
    vendorId: string | null
    categoryId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    quantity: number
    minPrice: number
    category: number
    pricingUnit: number
    isAvailable: number
    status: number
    nextAvailableDate: number
    images: number
    locations: number
    terms: number
    bookingType: number
    offers: number
    prices: number
    experience: number
    careerHighlight: number
    education: number
    createdAt: number
    updatedAt: number
    avgRating: number
    vendorId: number
    categoryId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    price?: true
    quantity?: true
    minPrice?: true
    avgRating?: true
  }

  export type ItemSumAggregateInputType = {
    price?: true
    quantity?: true
    minPrice?: true
    avgRating?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    quantity?: true
    minPrice?: true
    category?: true
    pricingUnit?: true
    isAvailable?: true
    status?: true
    nextAvailableDate?: true
    bookingType?: true
    experience?: true
    careerHighlight?: true
    education?: true
    createdAt?: true
    updatedAt?: true
    avgRating?: true
    vendorId?: true
    categoryId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    quantity?: true
    minPrice?: true
    category?: true
    pricingUnit?: true
    isAvailable?: true
    status?: true
    nextAvailableDate?: true
    bookingType?: true
    experience?: true
    careerHighlight?: true
    education?: true
    createdAt?: true
    updatedAt?: true
    avgRating?: true
    vendorId?: true
    categoryId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    quantity?: true
    minPrice?: true
    category?: true
    pricingUnit?: true
    isAvailable?: true
    status?: true
    nextAvailableDate?: true
    images?: true
    locations?: true
    terms?: true
    bookingType?: true
    offers?: true
    prices?: true
    experience?: true
    careerHighlight?: true
    education?: true
    createdAt?: true
    updatedAt?: true
    avgRating?: true
    vendorId?: true
    categoryId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    title: string
    description: string
    price: number | null
    quantity: number | null
    minPrice: number | null
    category: $Enums.Category
    pricingUnit: $Enums.PricingUnit | null
    isAvailable: boolean
    status: string | null
    nextAvailableDate: Date | null
    images: string[]
    locations: string[]
    terms: string[]
    bookingType: $Enums.BookingType
    offers: string[]
    prices: string[]
    experience: string | null
    careerHighlight: string | null
    education: string | null
    createdAt: Date
    updatedAt: Date | null
    avgRating: number
    vendorId: string
    categoryId: string | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    minPrice?: boolean
    category?: boolean
    pricingUnit?: boolean
    isAvailable?: boolean
    status?: boolean
    nextAvailableDate?: boolean
    images?: boolean
    locations?: boolean
    terms?: boolean
    bookingType?: boolean
    offers?: boolean
    prices?: boolean
    experience?: boolean
    careerHighlight?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avgRating?: boolean
    vendorId?: boolean
    categoryId?: boolean
    savedBy?: boolean | Item$savedByArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    categoryType?: boolean | Item$categoryTypeArgs<ExtArgs>
    reviews?: boolean | Item$reviewsArgs<ExtArgs>
    bookings?: boolean | Item$bookingsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    minPrice?: boolean
    category?: boolean
    pricingUnit?: boolean
    isAvailable?: boolean
    status?: boolean
    nextAvailableDate?: boolean
    images?: boolean
    locations?: boolean
    terms?: boolean
    bookingType?: boolean
    offers?: boolean
    prices?: boolean
    experience?: boolean
    careerHighlight?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avgRating?: boolean
    vendorId?: boolean
    categoryId?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "quantity" | "minPrice" | "category" | "pricingUnit" | "isAvailable" | "status" | "nextAvailableDate" | "images" | "locations" | "terms" | "bookingType" | "offers" | "prices" | "experience" | "careerHighlight" | "education" | "createdAt" | "updatedAt" | "avgRating" | "vendorId" | "categoryId", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | Item$savedByArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    categoryType?: boolean | Item$categoryTypeArgs<ExtArgs>
    reviews?: boolean | Item$reviewsArgs<ExtArgs>
    bookings?: boolean | Item$bookingsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      savedBy: Prisma.$SavedItemPayload<ExtArgs>[]
      vendor: Prisma.$VendorPayload<ExtArgs>
      categoryType: Prisma.$CategoryTypePayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      price: number | null
      quantity: number | null
      minPrice: number | null
      category: $Enums.Category
      pricingUnit: $Enums.PricingUnit | null
      isAvailable: boolean
      status: string | null
      nextAvailableDate: Date | null
      images: string[]
      locations: string[]
      terms: string[]
      bookingType: $Enums.BookingType
      offers: string[]
      prices: string[]
      experience: string | null
      careerHighlight: string | null
      education: string | null
      createdAt: Date
      updatedAt: Date | null
      avgRating: number
      vendorId: string
      categoryId: string | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * @param {ItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const item = await prisma.item.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Item.
     * @param {ItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const item = await prisma.item.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedBy<T extends Item$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Item$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryType<T extends Item$categoryTypeArgs<ExtArgs> = {}>(args?: Subset<T, Item$categoryTypeArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Item$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Item$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Item$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Item$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly title: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly price: FieldRef<"Item", 'Float'>
    readonly quantity: FieldRef<"Item", 'Int'>
    readonly minPrice: FieldRef<"Item", 'Float'>
    readonly category: FieldRef<"Item", 'Category'>
    readonly pricingUnit: FieldRef<"Item", 'PricingUnit'>
    readonly isAvailable: FieldRef<"Item", 'Boolean'>
    readonly status: FieldRef<"Item", 'String'>
    readonly nextAvailableDate: FieldRef<"Item", 'DateTime'>
    readonly images: FieldRef<"Item", 'String[]'>
    readonly locations: FieldRef<"Item", 'String[]'>
    readonly terms: FieldRef<"Item", 'String[]'>
    readonly bookingType: FieldRef<"Item", 'BookingType'>
    readonly offers: FieldRef<"Item", 'String[]'>
    readonly prices: FieldRef<"Item", 'String[]'>
    readonly experience: FieldRef<"Item", 'String'>
    readonly careerHighlight: FieldRef<"Item", 'String'>
    readonly education: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
    readonly avgRating: FieldRef<"Item", 'Float'>
    readonly vendorId: FieldRef<"Item", 'String'>
    readonly categoryId: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item findRaw
   */
  export type ItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Item aggregateRaw
   */
  export type ItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Item.savedBy
   */
  export type Item$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    where?: SavedItemWhereInput
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    cursor?: SavedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedItemScalarFieldEnum | SavedItemScalarFieldEnum[]
  }

  /**
   * Item.categoryType
   */
  export type Item$categoryTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    where?: CategoryTypeWhereInput
  }

  /**
   * Item.reviews
   */
  export type Item$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Item.bookings
   */
  export type Item$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model CategoryType
   */

  export type AggregateCategoryType = {
    _count: CategoryTypeCountAggregateOutputType | null
    _min: CategoryTypeMinAggregateOutputType | null
    _max: CategoryTypeMaxAggregateOutputType | null
  }

  export type CategoryTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryType to aggregate.
     */
    where?: CategoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTypes to fetch.
     */
    orderBy?: CategoryTypeOrderByWithRelationInput | CategoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryTypes
    **/
    _count?: true | CategoryTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryTypeMaxAggregateInputType
  }

  export type GetCategoryTypeAggregateType<T extends CategoryTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryType[P]>
      : GetScalarType<T[P], AggregateCategoryType[P]>
  }




  export type CategoryTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryTypeWhereInput
    orderBy?: CategoryTypeOrderByWithAggregationInput | CategoryTypeOrderByWithAggregationInput[]
    by: CategoryTypeScalarFieldEnum[] | CategoryTypeScalarFieldEnum
    having?: CategoryTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryTypeCountAggregateInputType | true
    _min?: CategoryTypeMinAggregateInputType
    _max?: CategoryTypeMaxAggregateInputType
  }

  export type CategoryTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date | null
    _count: CategoryTypeCountAggregateOutputType | null
    _min: CategoryTypeMinAggregateOutputType | null
    _max: CategoryTypeMaxAggregateOutputType | null
  }

  type GetCategoryTypeGroupByPayload<T extends CategoryTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryTypeGroupByOutputType[P]>
        }
      >
    >


  export type CategoryTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | CategoryType$itemsArgs<ExtArgs>
    _count?: boolean | CategoryTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryType"]>



  export type CategoryTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["categoryType"]>
  export type CategoryTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CategoryType$itemsArgs<ExtArgs>
    _count?: boolean | CategoryTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryType"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["categoryType"]>
    composites: {}
  }

  type CategoryTypeGetPayload<S extends boolean | null | undefined | CategoryTypeDefaultArgs> = $Result.GetResult<Prisma.$CategoryTypePayload, S>

  type CategoryTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryTypeCountAggregateInputType | true
    }

  export interface CategoryTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryType'], meta: { name: 'CategoryType' } }
    /**
     * Find zero or one CategoryType that matches the filter.
     * @param {CategoryTypeFindUniqueArgs} args - Arguments to find a CategoryType
     * @example
     * // Get one CategoryType
     * const categoryType = await prisma.categoryType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryTypeFindUniqueArgs>(args: SelectSubset<T, CategoryTypeFindUniqueArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryTypeFindUniqueOrThrowArgs} args - Arguments to find a CategoryType
     * @example
     * // Get one CategoryType
     * const categoryType = await prisma.categoryType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeFindFirstArgs} args - Arguments to find a CategoryType
     * @example
     * // Get one CategoryType
     * const categoryType = await prisma.categoryType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryTypeFindFirstArgs>(args?: SelectSubset<T, CategoryTypeFindFirstArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeFindFirstOrThrowArgs} args - Arguments to find a CategoryType
     * @example
     * // Get one CategoryType
     * const categoryType = await prisma.categoryType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryTypes
     * const categoryTypes = await prisma.categoryType.findMany()
     * 
     * // Get first 10 CategoryTypes
     * const categoryTypes = await prisma.categoryType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryTypeWithIdOnly = await prisma.categoryType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryTypeFindManyArgs>(args?: SelectSubset<T, CategoryTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryType.
     * @param {CategoryTypeCreateArgs} args - Arguments to create a CategoryType.
     * @example
     * // Create one CategoryType
     * const CategoryType = await prisma.categoryType.create({
     *   data: {
     *     // ... data to create a CategoryType
     *   }
     * })
     * 
     */
    create<T extends CategoryTypeCreateArgs>(args: SelectSubset<T, CategoryTypeCreateArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryTypes.
     * @param {CategoryTypeCreateManyArgs} args - Arguments to create many CategoryTypes.
     * @example
     * // Create many CategoryTypes
     * const categoryType = await prisma.categoryType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryTypeCreateManyArgs>(args?: SelectSubset<T, CategoryTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryType.
     * @param {CategoryTypeDeleteArgs} args - Arguments to delete one CategoryType.
     * @example
     * // Delete one CategoryType
     * const CategoryType = await prisma.categoryType.delete({
     *   where: {
     *     // ... filter to delete one CategoryType
     *   }
     * })
     * 
     */
    delete<T extends CategoryTypeDeleteArgs>(args: SelectSubset<T, CategoryTypeDeleteArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryType.
     * @param {CategoryTypeUpdateArgs} args - Arguments to update one CategoryType.
     * @example
     * // Update one CategoryType
     * const categoryType = await prisma.categoryType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryTypeUpdateArgs>(args: SelectSubset<T, CategoryTypeUpdateArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryTypes.
     * @param {CategoryTypeDeleteManyArgs} args - Arguments to filter CategoryTypes to delete.
     * @example
     * // Delete a few CategoryTypes
     * const { count } = await prisma.categoryType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryTypeDeleteManyArgs>(args?: SelectSubset<T, CategoryTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryTypes
     * const categoryType = await prisma.categoryType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryTypeUpdateManyArgs>(args: SelectSubset<T, CategoryTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryType.
     * @param {CategoryTypeUpsertArgs} args - Arguments to update or create a CategoryType.
     * @example
     * // Update or create a CategoryType
     * const categoryType = await prisma.categoryType.upsert({
     *   create: {
     *     // ... data to create a CategoryType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryType we want to update
     *   }
     * })
     */
    upsert<T extends CategoryTypeUpsertArgs>(args: SelectSubset<T, CategoryTypeUpsertArgs<ExtArgs>>): Prisma__CategoryTypeClient<$Result.GetResult<Prisma.$CategoryTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryTypes that matches the filter.
     * @param {CategoryTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoryType = await prisma.categoryType.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryTypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CategoryType.
     * @param {CategoryTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoryType = await prisma.categoryType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryTypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CategoryTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeCountArgs} args - Arguments to filter CategoryTypes to count.
     * @example
     * // Count the number of CategoryTypes
     * const count = await prisma.categoryType.count({
     *   where: {
     *     // ... the filter for the CategoryTypes we want to count
     *   }
     * })
    **/
    count<T extends CategoryTypeCountArgs>(
      args?: Subset<T, CategoryTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryTypeAggregateArgs>(args: Subset<T, CategoryTypeAggregateArgs>): Prisma.PrismaPromise<GetCategoryTypeAggregateType<T>>

    /**
     * Group by CategoryType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTypeGroupByArgs} args - Group by arguments.
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
      T extends CategoryTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryTypeGroupByArgs['orderBy'] }
        : { orderBy?: CategoryTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryType model
   */
  readonly fields: CategoryTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends CategoryType$itemsArgs<ExtArgs> = {}>(args?: Subset<T, CategoryType$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoryType model
   */
  interface CategoryTypeFieldRefs {
    readonly id: FieldRef<"CategoryType", 'String'>
    readonly name: FieldRef<"CategoryType", 'String'>
    readonly createdAt: FieldRef<"CategoryType", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryType findUnique
   */
  export type CategoryTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryType to fetch.
     */
    where: CategoryTypeWhereUniqueInput
  }

  /**
   * CategoryType findUniqueOrThrow
   */
  export type CategoryTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryType to fetch.
     */
    where: CategoryTypeWhereUniqueInput
  }

  /**
   * CategoryType findFirst
   */
  export type CategoryTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryType to fetch.
     */
    where?: CategoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTypes to fetch.
     */
    orderBy?: CategoryTypeOrderByWithRelationInput | CategoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryTypes.
     */
    cursor?: CategoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryTypes.
     */
    distinct?: CategoryTypeScalarFieldEnum | CategoryTypeScalarFieldEnum[]
  }

  /**
   * CategoryType findFirstOrThrow
   */
  export type CategoryTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryType to fetch.
     */
    where?: CategoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTypes to fetch.
     */
    orderBy?: CategoryTypeOrderByWithRelationInput | CategoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryTypes.
     */
    cursor?: CategoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryTypes.
     */
    distinct?: CategoryTypeScalarFieldEnum | CategoryTypeScalarFieldEnum[]
  }

  /**
   * CategoryType findMany
   */
  export type CategoryTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTypes to fetch.
     */
    where?: CategoryTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTypes to fetch.
     */
    orderBy?: CategoryTypeOrderByWithRelationInput | CategoryTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryTypes.
     */
    cursor?: CategoryTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTypes.
     */
    skip?: number
    distinct?: CategoryTypeScalarFieldEnum | CategoryTypeScalarFieldEnum[]
  }

  /**
   * CategoryType create
   */
  export type CategoryTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryType.
     */
    data: XOR<CategoryTypeCreateInput, CategoryTypeUncheckedCreateInput>
  }

  /**
   * CategoryType createMany
   */
  export type CategoryTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryTypes.
     */
    data: CategoryTypeCreateManyInput | CategoryTypeCreateManyInput[]
  }

  /**
   * CategoryType update
   */
  export type CategoryTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryType.
     */
    data: XOR<CategoryTypeUpdateInput, CategoryTypeUncheckedUpdateInput>
    /**
     * Choose, which CategoryType to update.
     */
    where: CategoryTypeWhereUniqueInput
  }

  /**
   * CategoryType updateMany
   */
  export type CategoryTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryTypes.
     */
    data: XOR<CategoryTypeUpdateManyMutationInput, CategoryTypeUncheckedUpdateManyInput>
    /**
     * Filter which CategoryTypes to update
     */
    where?: CategoryTypeWhereInput
    /**
     * Limit how many CategoryTypes to update.
     */
    limit?: number
  }

  /**
   * CategoryType upsert
   */
  export type CategoryTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryType to update in case it exists.
     */
    where: CategoryTypeWhereUniqueInput
    /**
     * In case the CategoryType found by the `where` argument doesn't exist, create a new CategoryType with this data.
     */
    create: XOR<CategoryTypeCreateInput, CategoryTypeUncheckedCreateInput>
    /**
     * In case the CategoryType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryTypeUpdateInput, CategoryTypeUncheckedUpdateInput>
  }

  /**
   * CategoryType delete
   */
  export type CategoryTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
    /**
     * Filter which CategoryType to delete.
     */
    where: CategoryTypeWhereUniqueInput
  }

  /**
   * CategoryType deleteMany
   */
  export type CategoryTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryTypes to delete
     */
    where?: CategoryTypeWhereInput
    /**
     * Limit how many CategoryTypes to delete.
     */
    limit?: number
  }

  /**
   * CategoryType findRaw
   */
  export type CategoryTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryType aggregateRaw
   */
  export type CategoryTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryType.items
   */
  export type CategoryType$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * CategoryType without action
   */
  export type CategoryTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryType
     */
    select?: CategoryTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryType
     */
    omit?: CategoryTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTypeInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    comment: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewer: string | null
    itemId: string | null
    vendorId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    comment: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewer: string | null
    itemId: string | null
    vendorId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    createdAt: number
    updatedAt: number
    reviewer: number
    itemId: number
    vendorId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    reviewer?: true
    itemId?: true
    vendorId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    reviewer?: true
    itemId?: true
    vendorId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    reviewer?: true
    itemId?: true
    vendorId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    comment: string
    rating: number
    createdAt: Date
    updatedAt: Date
    reviewer: string
    itemId: string | null
    vendorId: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean
    itemId?: boolean
    vendorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | Review$itemArgs<ExtArgs>
    vendor?: boolean | Review$vendorArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean
    itemId?: boolean
    vendorId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "rating" | "createdAt" | "updatedAt" | "reviewer" | "itemId" | "vendorId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | Review$itemArgs<ExtArgs>
    vendor?: boolean | Review$vendorArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs> | null
      vendor: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comment: string
      rating: number
      createdAt: Date
      updatedAt: Date
      reviewer: string
      itemId: string | null
      vendorId: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends Review$itemArgs<ExtArgs> = {}>(args?: Subset<T, Review$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendor<T extends Review$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Review$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly reviewer: FieldRef<"Review", 'String'>
    readonly itemId: FieldRef<"Review", 'String'>
    readonly vendorId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review.item
   */
  export type Review$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }

  /**
   * Review.vendor
   */
  export type Review$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model SavedItem
   */

  export type AggregateSavedItem = {
    _count: SavedItemCountAggregateOutputType | null
    _min: SavedItemMinAggregateOutputType | null
    _max: SavedItemMaxAggregateOutputType | null
  }

  export type SavedItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    createdAt: Date | null
  }

  export type SavedItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    createdAt: Date | null
  }

  export type SavedItemCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    createdAt: number
    _all: number
  }


  export type SavedItemMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    createdAt?: true
  }

  export type SavedItemMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    createdAt?: true
  }

  export type SavedItemCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedItem to aggregate.
     */
    where?: SavedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedItems to fetch.
     */
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedItems
    **/
    _count?: true | SavedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedItemMaxAggregateInputType
  }

  export type GetSavedItemAggregateType<T extends SavedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedItem[P]>
      : GetScalarType<T[P], AggregateSavedItem[P]>
  }




  export type SavedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedItemWhereInput
    orderBy?: SavedItemOrderByWithAggregationInput | SavedItemOrderByWithAggregationInput[]
    by: SavedItemScalarFieldEnum[] | SavedItemScalarFieldEnum
    having?: SavedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedItemCountAggregateInputType | true
    _min?: SavedItemMinAggregateInputType
    _max?: SavedItemMaxAggregateInputType
  }

  export type SavedItemGroupByOutputType = {
    id: string
    userId: string
    itemId: string
    createdAt: Date
    _count: SavedItemCountAggregateOutputType | null
    _min: SavedItemMinAggregateOutputType | null
    _max: SavedItemMaxAggregateOutputType | null
  }

  type GetSavedItemGroupByPayload<T extends SavedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedItemGroupByOutputType[P]>
            : GetScalarType<T[P], SavedItemGroupByOutputType[P]>
        }
      >
    >


  export type SavedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedItem"]>



  export type SavedItemSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    createdAt?: boolean
  }

  export type SavedItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemId" | "createdAt", ExtArgs["result"]["savedItem"]>
  export type SavedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $SavedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemId: string
      createdAt: Date
    }, ExtArgs["result"]["savedItem"]>
    composites: {}
  }

  type SavedItemGetPayload<S extends boolean | null | undefined | SavedItemDefaultArgs> = $Result.GetResult<Prisma.$SavedItemPayload, S>

  type SavedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedItemCountAggregateInputType | true
    }

  export interface SavedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedItem'], meta: { name: 'SavedItem' } }
    /**
     * Find zero or one SavedItem that matches the filter.
     * @param {SavedItemFindUniqueArgs} args - Arguments to find a SavedItem
     * @example
     * // Get one SavedItem
     * const savedItem = await prisma.savedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedItemFindUniqueArgs>(args: SelectSubset<T, SavedItemFindUniqueArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedItemFindUniqueOrThrowArgs} args - Arguments to find a SavedItem
     * @example
     * // Get one SavedItem
     * const savedItem = await prisma.savedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemFindFirstArgs} args - Arguments to find a SavedItem
     * @example
     * // Get one SavedItem
     * const savedItem = await prisma.savedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedItemFindFirstArgs>(args?: SelectSubset<T, SavedItemFindFirstArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemFindFirstOrThrowArgs} args - Arguments to find a SavedItem
     * @example
     * // Get one SavedItem
     * const savedItem = await prisma.savedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedItems
     * const savedItems = await prisma.savedItem.findMany()
     * 
     * // Get first 10 SavedItems
     * const savedItems = await prisma.savedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedItemWithIdOnly = await prisma.savedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedItemFindManyArgs>(args?: SelectSubset<T, SavedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedItem.
     * @param {SavedItemCreateArgs} args - Arguments to create a SavedItem.
     * @example
     * // Create one SavedItem
     * const SavedItem = await prisma.savedItem.create({
     *   data: {
     *     // ... data to create a SavedItem
     *   }
     * })
     * 
     */
    create<T extends SavedItemCreateArgs>(args: SelectSubset<T, SavedItemCreateArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedItems.
     * @param {SavedItemCreateManyArgs} args - Arguments to create many SavedItems.
     * @example
     * // Create many SavedItems
     * const savedItem = await prisma.savedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedItemCreateManyArgs>(args?: SelectSubset<T, SavedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedItem.
     * @param {SavedItemDeleteArgs} args - Arguments to delete one SavedItem.
     * @example
     * // Delete one SavedItem
     * const SavedItem = await prisma.savedItem.delete({
     *   where: {
     *     // ... filter to delete one SavedItem
     *   }
     * })
     * 
     */
    delete<T extends SavedItemDeleteArgs>(args: SelectSubset<T, SavedItemDeleteArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedItem.
     * @param {SavedItemUpdateArgs} args - Arguments to update one SavedItem.
     * @example
     * // Update one SavedItem
     * const savedItem = await prisma.savedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedItemUpdateArgs>(args: SelectSubset<T, SavedItemUpdateArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedItems.
     * @param {SavedItemDeleteManyArgs} args - Arguments to filter SavedItems to delete.
     * @example
     * // Delete a few SavedItems
     * const { count } = await prisma.savedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedItemDeleteManyArgs>(args?: SelectSubset<T, SavedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedItems
     * const savedItem = await prisma.savedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedItemUpdateManyArgs>(args: SelectSubset<T, SavedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedItem.
     * @param {SavedItemUpsertArgs} args - Arguments to update or create a SavedItem.
     * @example
     * // Update or create a SavedItem
     * const savedItem = await prisma.savedItem.upsert({
     *   create: {
     *     // ... data to create a SavedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedItem we want to update
     *   }
     * })
     */
    upsert<T extends SavedItemUpsertArgs>(args: SelectSubset<T, SavedItemUpsertArgs<ExtArgs>>): Prisma__SavedItemClient<$Result.GetResult<Prisma.$SavedItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedItems that matches the filter.
     * @param {SavedItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const savedItem = await prisma.savedItem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SavedItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SavedItem.
     * @param {SavedItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const savedItem = await prisma.savedItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SavedItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SavedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemCountArgs} args - Arguments to filter SavedItems to count.
     * @example
     * // Count the number of SavedItems
     * const count = await prisma.savedItem.count({
     *   where: {
     *     // ... the filter for the SavedItems we want to count
     *   }
     * })
    **/
    count<T extends SavedItemCountArgs>(
      args?: Subset<T, SavedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedItemAggregateArgs>(args: Subset<T, SavedItemAggregateArgs>): Prisma.PrismaPromise<GetSavedItemAggregateType<T>>

    /**
     * Group by SavedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedItemGroupByArgs} args - Group by arguments.
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
      T extends SavedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedItemGroupByArgs['orderBy'] }
        : { orderBy?: SavedItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedItem model
   */
  readonly fields: SavedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedItem model
   */
  interface SavedItemFieldRefs {
    readonly id: FieldRef<"SavedItem", 'String'>
    readonly userId: FieldRef<"SavedItem", 'String'>
    readonly itemId: FieldRef<"SavedItem", 'String'>
    readonly createdAt: FieldRef<"SavedItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedItem findUnique
   */
  export type SavedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter, which SavedItem to fetch.
     */
    where: SavedItemWhereUniqueInput
  }

  /**
   * SavedItem findUniqueOrThrow
   */
  export type SavedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter, which SavedItem to fetch.
     */
    where: SavedItemWhereUniqueInput
  }

  /**
   * SavedItem findFirst
   */
  export type SavedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter, which SavedItem to fetch.
     */
    where?: SavedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedItems to fetch.
     */
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedItems.
     */
    cursor?: SavedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedItems.
     */
    distinct?: SavedItemScalarFieldEnum | SavedItemScalarFieldEnum[]
  }

  /**
   * SavedItem findFirstOrThrow
   */
  export type SavedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter, which SavedItem to fetch.
     */
    where?: SavedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedItems to fetch.
     */
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedItems.
     */
    cursor?: SavedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedItems.
     */
    distinct?: SavedItemScalarFieldEnum | SavedItemScalarFieldEnum[]
  }

  /**
   * SavedItem findMany
   */
  export type SavedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter, which SavedItems to fetch.
     */
    where?: SavedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedItems to fetch.
     */
    orderBy?: SavedItemOrderByWithRelationInput | SavedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedItems.
     */
    cursor?: SavedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedItems.
     */
    skip?: number
    distinct?: SavedItemScalarFieldEnum | SavedItemScalarFieldEnum[]
  }

  /**
   * SavedItem create
   */
  export type SavedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedItem.
     */
    data: XOR<SavedItemCreateInput, SavedItemUncheckedCreateInput>
  }

  /**
   * SavedItem createMany
   */
  export type SavedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedItems.
     */
    data: SavedItemCreateManyInput | SavedItemCreateManyInput[]
  }

  /**
   * SavedItem update
   */
  export type SavedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedItem.
     */
    data: XOR<SavedItemUpdateInput, SavedItemUncheckedUpdateInput>
    /**
     * Choose, which SavedItem to update.
     */
    where: SavedItemWhereUniqueInput
  }

  /**
   * SavedItem updateMany
   */
  export type SavedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedItems.
     */
    data: XOR<SavedItemUpdateManyMutationInput, SavedItemUncheckedUpdateManyInput>
    /**
     * Filter which SavedItems to update
     */
    where?: SavedItemWhereInput
    /**
     * Limit how many SavedItems to update.
     */
    limit?: number
  }

  /**
   * SavedItem upsert
   */
  export type SavedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedItem to update in case it exists.
     */
    where: SavedItemWhereUniqueInput
    /**
     * In case the SavedItem found by the `where` argument doesn't exist, create a new SavedItem with this data.
     */
    create: XOR<SavedItemCreateInput, SavedItemUncheckedCreateInput>
    /**
     * In case the SavedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedItemUpdateInput, SavedItemUncheckedUpdateInput>
  }

  /**
   * SavedItem delete
   */
  export type SavedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
    /**
     * Filter which SavedItem to delete.
     */
    where: SavedItemWhereUniqueInput
  }

  /**
   * SavedItem deleteMany
   */
  export type SavedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedItems to delete
     */
    where?: SavedItemWhereInput
    /**
     * Limit how many SavedItems to delete.
     */
    limit?: number
  }

  /**
   * SavedItem findRaw
   */
  export type SavedItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedItem aggregateRaw
   */
  export type SavedItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedItem without action
   */
  export type SavedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedItem
     */
    select?: SavedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedItem
     */
    omit?: SavedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedItemInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    address: string | null
    status: $Enums.BookingStatus | null
    request: $Enums.BookingRequest | null
    totalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    bookedBy: string | null
    vendorId: string | null
    itemId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    address: string | null
    status: $Enums.BookingStatus | null
    request: $Enums.BookingRequest | null
    totalPrice: number | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    bookedBy: string | null
    vendorId: string | null
    itemId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    address: number
    status: number
    request: number
    totalPrice: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    bookedBy: number
    vendorId: number
    itemId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    address?: true
    status?: true
    request?: true
    totalPrice?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    bookedBy?: true
    vendorId?: true
    itemId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    address?: true
    status?: true
    request?: true
    totalPrice?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    bookedBy?: true
    vendorId?: true
    itemId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    address?: true
    status?: true
    request?: true
    totalPrice?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    bookedBy?: true
    vendorId?: true
    itemId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    address: string | null
    status: $Enums.BookingStatus | null
    request: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date
    updatedAt: Date
    bookedBy: string
    vendorId: string
    itemId: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    address?: boolean
    status?: boolean
    request?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookedBy?: boolean
    vendorId?: boolean
    itemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    item?: boolean | Booking$itemArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    address?: boolean
    status?: boolean
    request?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookedBy?: boolean
    vendorId?: boolean
    itemId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "address" | "status" | "request" | "totalPrice" | "paymentStatus" | "createdAt" | "updatedAt" | "bookedBy" | "vendorId" | "itemId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    item?: boolean | Booking$itemArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      address: string | null
      status: $Enums.BookingStatus | null
      request: $Enums.BookingRequest | null
      totalPrice: number
      paymentStatus: $Enums.PaymentStatus | null
      createdAt: Date
      updatedAt: Date
      bookedBy: string
      vendorId: string
      itemId: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * @param {BookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const booking = await prisma.booking.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Booking.
     * @param {BookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const booking = await prisma.booking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends Booking$itemArgs<ExtArgs> = {}>(args?: Subset<T, Booking$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly startDate: FieldRef<"Booking", 'DateTime'>
    readonly endDate: FieldRef<"Booking", 'DateTime'>
    readonly address: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly request: FieldRef<"Booking", 'BookingRequest'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly paymentStatus: FieldRef<"Booking", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly bookedBy: FieldRef<"Booking", 'String'>
    readonly vendorId: FieldRef<"Booking", 'String'>
    readonly itemId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking findRaw
   */
  export type BookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking aggregateRaw
   */
  export type BookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking.item
   */
  export type Booking$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    paidAmount: number | null
    debit: number | null
    credit: number | null
  }

  export type PaymentSumAggregateOutputType = {
    paidAmount: number | null
    debit: number | null
    credit: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    paidAmount: number | null
    debit: number | null
    credit: number | null
    reason: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bookingId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    paidAmount: number | null
    debit: number | null
    credit: number | null
    reason: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    bookingId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    paidAmount: number
    debit: number
    credit: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    bookingId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    paidAmount?: true
    debit?: true
    credit?: true
  }

  export type PaymentSumAggregateInputType = {
    paidAmount?: true
    debit?: true
    credit?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    paidAmount?: true
    debit?: true
    credit?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookingId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    paidAmount?: true
    debit?: true
    credit?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookingId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    paidAmount?: true
    debit?: true
    credit?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookingId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    bookingId: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paidAmount?: boolean
    debit?: boolean
    credit?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookingId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    paidAmount?: boolean
    debit?: boolean
    credit?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookingId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paidAmount" | "debit" | "credit" | "reason" | "status" | "createdAt" | "updatedAt" | "userId" | "bookingId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paidAmount: number
      debit: number
      credit: number
      reason: string
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
      userId: string
      bookingId: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment = await prisma.payment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment.
     * @param {PaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment = await prisma.payment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Payment$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Payment$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly paidAmount: FieldRef<"Payment", 'Float'>
    readonly debit: FieldRef<"Payment", 'Float'>
    readonly credit: FieldRef<"Payment", 'Float'>
    readonly reason: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment findRaw
   */
  export type PaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment aggregateRaw
   */
  export type PaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment.booking
   */
  export type Payment$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profile: 'profile',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    verified: 'verified',
    address: 'address',
    city: 'city',
    state: 'state',
    token: 'token',
    tokenExpires: 'tokenExpires',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    verified: 'verified',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    minPrice: 'minPrice',
    category: 'category',
    pricingUnit: 'pricingUnit',
    isAvailable: 'isAvailable',
    status: 'status',
    nextAvailableDate: 'nextAvailableDate',
    images: 'images',
    locations: 'locations',
    terms: 'terms',
    bookingType: 'bookingType',
    offers: 'offers',
    prices: 'prices',
    experience: 'experience',
    careerHighlight: 'careerHighlight',
    education: 'education',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    avgRating: 'avgRating',
    vendorId: 'vendorId',
    categoryId: 'categoryId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CategoryTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryTypeScalarFieldEnum = (typeof CategoryTypeScalarFieldEnum)[keyof typeof CategoryTypeScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewer: 'reviewer',
    itemId: 'itemId',
    vendorId: 'vendorId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SavedItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    createdAt: 'createdAt'
  };

  export type SavedItemScalarFieldEnum = (typeof SavedItemScalarFieldEnum)[keyof typeof SavedItemScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    address: 'address',
    status: 'status',
    request: 'request',
    totalPrice: 'totalPrice',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bookedBy: 'bookedBy',
    vendorId: 'vendorId',
    itemId: 'itemId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    paidAmount: 'paidAmount',
    debit: 'debit',
    credit: 'credit',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bookingId: 'bookingId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'PricingUnit'
   */
  export type EnumPricingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingUnit'>
    


  /**
   * Reference to a field of type 'PricingUnit[]'
   */
  export type ListEnumPricingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingUnit[]'>
    


  /**
   * Reference to a field of type 'BookingType'
   */
  export type EnumBookingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingType'>
    


  /**
   * Reference to a field of type 'BookingType[]'
   */
  export type ListEnumBookingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingType[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'BookingRequest'
   */
  export type EnumBookingRequestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingRequest'>
    


  /**
   * Reference to a field of type 'BookingRequest[]'
   */
  export type ListEnumBookingRequestFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingRequest[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profile?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
    savedItems?: SavedItemListRelationFilter
    vendorProfile?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    token?: SortOrder
    tokenExpires?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    savedItems?: SavedItemOrderByRelationAggregateInput
    vendorProfile?: VendorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profile?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    payments?: PaymentListRelationFilter
    savedItems?: SavedItemListRelationFilter
    vendorProfile?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    token?: SortOrder
    tokenExpires?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    userId?: StringFilter<"Vendor"> | string
    companyName?: StringNullableFilter<"Vendor"> | string | null
    contactPhone?: StringNullableFilter<"Vendor"> | string | null
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    city?: StringNullableFilter<"Vendor"> | string | null
    state?: StringNullableFilter<"Vendor"> | string | null
    country?: StringNullableFilter<"Vendor"> | string | null
    verified?: BoolFilter<"Vendor"> | boolean
    rating?: FloatNullableFilter<"Vendor"> | number | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Vendor"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    items?: ItemListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    companyName?: StringNullableFilter<"Vendor"> | string | null
    contactPhone?: StringNullableFilter<"Vendor"> | string | null
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    city?: StringNullableFilter<"Vendor"> | string | null
    state?: StringNullableFilter<"Vendor"> | string | null
    country?: StringNullableFilter<"Vendor"> | string | null
    verified?: BoolFilter<"Vendor"> | boolean
    rating?: FloatNullableFilter<"Vendor"> | number | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Vendor"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    items?: ItemListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "userId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    userId?: StringWithAggregatesFilter<"Vendor"> | string
    companyName?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    city?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    state?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    country?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    verified?: BoolWithAggregatesFilter<"Vendor"> | boolean
    rating?: FloatNullableWithAggregatesFilter<"Vendor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Vendor"> | Date | string | null
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    price?: FloatNullableFilter<"Item"> | number | null
    quantity?: IntNullableFilter<"Item"> | number | null
    minPrice?: FloatNullableFilter<"Item"> | number | null
    category?: EnumCategoryFilter<"Item"> | $Enums.Category
    pricingUnit?: EnumPricingUnitNullableFilter<"Item"> | $Enums.PricingUnit | null
    isAvailable?: BoolFilter<"Item"> | boolean
    status?: StringNullableFilter<"Item"> | string | null
    nextAvailableDate?: DateTimeNullableFilter<"Item"> | Date | string | null
    images?: StringNullableListFilter<"Item">
    locations?: StringNullableListFilter<"Item">
    terms?: StringNullableListFilter<"Item">
    bookingType?: EnumBookingTypeFilter<"Item"> | $Enums.BookingType
    offers?: StringNullableListFilter<"Item">
    prices?: StringNullableListFilter<"Item">
    experience?: StringNullableFilter<"Item"> | string | null
    careerHighlight?: StringNullableFilter<"Item"> | string | null
    education?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    avgRating?: FloatFilter<"Item"> | number
    vendorId?: StringFilter<"Item"> | string
    categoryId?: StringNullableFilter<"Item"> | string | null
    savedBy?: SavedItemListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    categoryType?: XOR<CategoryTypeNullableScalarRelationFilter, CategoryTypeWhereInput> | null
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    category?: SortOrder
    pricingUnit?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    nextAvailableDate?: SortOrder
    images?: SortOrder
    locations?: SortOrder
    terms?: SortOrder
    bookingType?: SortOrder
    offers?: SortOrder
    prices?: SortOrder
    experience?: SortOrder
    careerHighlight?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avgRating?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    savedBy?: SavedItemOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
    categoryType?: CategoryTypeOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    price?: FloatNullableFilter<"Item"> | number | null
    quantity?: IntNullableFilter<"Item"> | number | null
    minPrice?: FloatNullableFilter<"Item"> | number | null
    category?: EnumCategoryFilter<"Item"> | $Enums.Category
    pricingUnit?: EnumPricingUnitNullableFilter<"Item"> | $Enums.PricingUnit | null
    isAvailable?: BoolFilter<"Item"> | boolean
    status?: StringNullableFilter<"Item"> | string | null
    nextAvailableDate?: DateTimeNullableFilter<"Item"> | Date | string | null
    images?: StringNullableListFilter<"Item">
    locations?: StringNullableListFilter<"Item">
    terms?: StringNullableListFilter<"Item">
    bookingType?: EnumBookingTypeFilter<"Item"> | $Enums.BookingType
    offers?: StringNullableListFilter<"Item">
    prices?: StringNullableListFilter<"Item">
    experience?: StringNullableFilter<"Item"> | string | null
    careerHighlight?: StringNullableFilter<"Item"> | string | null
    education?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    avgRating?: FloatFilter<"Item"> | number
    vendorId?: StringFilter<"Item"> | string
    categoryId?: StringNullableFilter<"Item"> | string | null
    savedBy?: SavedItemListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    categoryType?: XOR<CategoryTypeNullableScalarRelationFilter, CategoryTypeWhereInput> | null
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    category?: SortOrder
    pricingUnit?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    nextAvailableDate?: SortOrder
    images?: SortOrder
    locations?: SortOrder
    terms?: SortOrder
    bookingType?: SortOrder
    offers?: SortOrder
    prices?: SortOrder
    experience?: SortOrder
    careerHighlight?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avgRating?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    title?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    price?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"Item"> | number | null
    minPrice?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    category?: EnumCategoryWithAggregatesFilter<"Item"> | $Enums.Category
    pricingUnit?: EnumPricingUnitNullableWithAggregatesFilter<"Item"> | $Enums.PricingUnit | null
    isAvailable?: BoolWithAggregatesFilter<"Item"> | boolean
    status?: StringNullableWithAggregatesFilter<"Item"> | string | null
    nextAvailableDate?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    images?: StringNullableListFilter<"Item">
    locations?: StringNullableListFilter<"Item">
    terms?: StringNullableListFilter<"Item">
    bookingType?: EnumBookingTypeWithAggregatesFilter<"Item"> | $Enums.BookingType
    offers?: StringNullableListFilter<"Item">
    prices?: StringNullableListFilter<"Item">
    experience?: StringNullableWithAggregatesFilter<"Item"> | string | null
    careerHighlight?: StringNullableWithAggregatesFilter<"Item"> | string | null
    education?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    avgRating?: FloatWithAggregatesFilter<"Item"> | number
    vendorId?: StringWithAggregatesFilter<"Item"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Item"> | string | null
  }

  export type CategoryTypeWhereInput = {
    AND?: CategoryTypeWhereInput | CategoryTypeWhereInput[]
    OR?: CategoryTypeWhereInput[]
    NOT?: CategoryTypeWhereInput | CategoryTypeWhereInput[]
    id?: StringFilter<"CategoryType"> | string
    name?: StringFilter<"CategoryType"> | string
    createdAt?: DateTimeFilter<"CategoryType"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CategoryType"> | Date | string | null
    items?: ItemListRelationFilter
  }

  export type CategoryTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type CategoryTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryTypeWhereInput | CategoryTypeWhereInput[]
    OR?: CategoryTypeWhereInput[]
    NOT?: CategoryTypeWhereInput | CategoryTypeWhereInput[]
    createdAt?: DateTimeFilter<"CategoryType"> | Date | string
    updatedAt?: DateTimeNullableFilter<"CategoryType"> | Date | string | null
    items?: ItemListRelationFilter
  }, "id" | "name">

  export type CategoryTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryTypeCountOrderByAggregateInput
    _max?: CategoryTypeMaxOrderByAggregateInput
    _min?: CategoryTypeMinOrderByAggregateInput
  }

  export type CategoryTypeScalarWhereWithAggregatesInput = {
    AND?: CategoryTypeScalarWhereWithAggregatesInput | CategoryTypeScalarWhereWithAggregatesInput[]
    OR?: CategoryTypeScalarWhereWithAggregatesInput[]
    NOT?: CategoryTypeScalarWhereWithAggregatesInput | CategoryTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryType"> | string
    name?: StringWithAggregatesFilter<"CategoryType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CategoryType"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CategoryType"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    comment?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: StringFilter<"Review"> | string
    itemId?: StringNullableFilter<"Review"> | string | null
    vendorId?: StringNullableFilter<"Review"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
    user?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    comment?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: StringFilter<"Review"> | string
    itemId?: StringNullableFilter<"Review"> | string | null
    vendorId?: StringNullableFilter<"Review"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    comment?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    reviewer?: StringWithAggregatesFilter<"Review"> | string
    itemId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    vendorId?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type SavedItemWhereInput = {
    AND?: SavedItemWhereInput | SavedItemWhereInput[]
    OR?: SavedItemWhereInput[]
    NOT?: SavedItemWhereInput | SavedItemWhereInput[]
    id?: StringFilter<"SavedItem"> | string
    userId?: StringFilter<"SavedItem"> | string
    itemId?: StringFilter<"SavedItem"> | string
    createdAt?: DateTimeFilter<"SavedItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type SavedItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type SavedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_itemId?: SavedItemUserIdItemIdCompoundUniqueInput
    AND?: SavedItemWhereInput | SavedItemWhereInput[]
    OR?: SavedItemWhereInput[]
    NOT?: SavedItemWhereInput | SavedItemWhereInput[]
    userId?: StringFilter<"SavedItem"> | string
    itemId?: StringFilter<"SavedItem"> | string
    createdAt?: DateTimeFilter<"SavedItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "userId_itemId">

  export type SavedItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedItemCountOrderByAggregateInput
    _max?: SavedItemMaxOrderByAggregateInput
    _min?: SavedItemMinOrderByAggregateInput
  }

  export type SavedItemScalarWhereWithAggregatesInput = {
    AND?: SavedItemScalarWhereWithAggregatesInput | SavedItemScalarWhereWithAggregatesInput[]
    OR?: SavedItemScalarWhereWithAggregatesInput[]
    NOT?: SavedItemScalarWhereWithAggregatesInput | SavedItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedItem"> | string
    userId?: StringWithAggregatesFilter<"SavedItem"> | string
    itemId?: StringWithAggregatesFilter<"SavedItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedItem"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    address?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusNullableFilter<"Booking"> | $Enums.BookingStatus | null
    request?: EnumBookingRequestNullableFilter<"Booking"> | $Enums.BookingRequest | null
    totalPrice?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPaymentStatusNullableFilter<"Booking"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    bookedBy?: StringFilter<"Booking"> | string
    vendorId?: StringFilter<"Booking"> | string
    itemId?: StringNullableFilter<"Booking"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    request?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookedBy?: SortOrder
    vendorId?: SortOrder
    itemId?: SortOrder
    user?: UserOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    address?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusNullableFilter<"Booking"> | $Enums.BookingStatus | null
    request?: EnumBookingRequestNullableFilter<"Booking"> | $Enums.BookingRequest | null
    totalPrice?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPaymentStatusNullableFilter<"Booking"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    bookedBy?: StringFilter<"Booking"> | string
    vendorId?: StringFilter<"Booking"> | string
    itemId?: StringNullableFilter<"Booking"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    request?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookedBy?: SortOrder
    vendorId?: SortOrder
    itemId?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    startDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    address?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBookingStatusNullableWithAggregatesFilter<"Booking"> | $Enums.BookingStatus | null
    request?: EnumBookingRequestNullableWithAggregatesFilter<"Booking"> | $Enums.BookingRequest | null
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    paymentStatus?: EnumPaymentStatusNullableWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    bookedBy?: StringWithAggregatesFilter<"Booking"> | string
    vendorId?: StringWithAggregatesFilter<"Booking"> | string
    itemId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    paidAmount?: FloatFilter<"Payment"> | number
    debit?: FloatFilter<"Payment"> | number
    credit?: FloatFilter<"Payment"> | number
    reason?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringNullableFilter<"Payment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paidAmount?: FloatFilter<"Payment"> | number
    debit?: FloatFilter<"Payment"> | number
    credit?: FloatFilter<"Payment"> | number
    reason?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id" | "bookingId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    paidAmount?: FloatWithAggregatesFilter<"Payment"> | number
    debit?: FloatWithAggregatesFilter<"Payment"> | number
    credit?: FloatWithAggregatesFilter<"Payment"> | number
    reason?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    savedItems?: SavedItemCreateNestedManyWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    savedItems?: SavedItemUncheckedCreateNestedManyWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUncheckedUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVendorProfileInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    bookings?: BookingCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    userId: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
    items?: ItemUpdateManyWithoutVendorNestedInput
    bookings?: BookingUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
    items?: ItemUncheckedUpdateManyWithoutVendorNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    userId: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VendorUpdateManyMutationInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    savedBy?: SavedItemCreateNestedManyWithoutItemInput
    vendor: VendorCreateNestedOneWithoutItemsInput
    categoryType?: CategoryTypeCreateNestedOneWithoutItemsInput
    reviews?: ReviewCreateNestedManyWithoutItemInput
    bookings?: BookingCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    categoryId?: string | null
    savedBy?: SavedItemUncheckedCreateNestedManyWithoutItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutItemInput
    bookings?: BookingUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    savedBy?: SavedItemUpdateManyWithoutItemNestedInput
    vendor?: VendorUpdateOneRequiredWithoutItemsNestedInput
    categoryType?: CategoryTypeUpdateOneWithoutItemsNestedInput
    reviews?: ReviewUpdateManyWithoutItemNestedInput
    bookings?: BookingUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    savedBy?: SavedItemUncheckedUpdateManyWithoutItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutItemNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    categoryId?: string | null
  }

  export type ItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    items?: ItemCreateNestedManyWithoutCategoryTypeInput
  }

  export type CategoryTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutCategoryTypeInput
  }

  export type CategoryTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUpdateManyWithoutCategoryTypeNestedInput
  }

  export type CategoryTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutCategoryTypeNestedInput
  }

  export type CategoryTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    item?: ItemCreateNestedOneWithoutReviewsInput
    vendor?: VendorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    itemId?: string | null
    vendorId?: string | null
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    item?: ItemUpdateOneWithoutReviewsNestedInput
    vendor?: VendorUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    itemId?: string | null
    vendorId?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedItemCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedItemsInput
    item: ItemCreateNestedOneWithoutSavedByInput
  }

  export type SavedItemUncheckedCreateInput = {
    id?: string
    userId: string
    itemId: string
    createdAt?: Date | string
  }

  export type SavedItemUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedItemUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedItemCreateManyInput = {
    id?: string
    userId: string
    itemId: string
    createdAt?: Date | string
  }

  export type SavedItemUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedItemUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vendor: VendorCreateNestedOneWithoutBookingsInput
    item?: ItemCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    vendorId: string
    itemId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutBookingsNestedInput
    item?: ItemUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    vendorId: string
    itemId?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    booking?: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bookingId?: string | null
  }

  export type PaymentUpdateInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    booking?: BookingUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bookingId?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
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
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SavedItemListRelationFilter = {
    every?: SavedItemWhereInput
    some?: SavedItemWhereInput
    none?: SavedItemWhereInput
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    token?: SortOrder
    tokenExpires?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    token?: SortOrder
    tokenExpires?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    token?: SortOrder
    tokenExpires?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumPricingUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingUnit | EnumPricingUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPricingUnitNullableFilter<$PrismaModel> | $Enums.PricingUnit | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumBookingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeFilter<$PrismaModel> | $Enums.BookingType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type CategoryTypeNullableScalarRelationFilter = {
    is?: CategoryTypeWhereInput | null
    isNot?: CategoryTypeWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    category?: SortOrder
    pricingUnit?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    nextAvailableDate?: SortOrder
    images?: SortOrder
    locations?: SortOrder
    terms?: SortOrder
    bookingType?: SortOrder
    offers?: SortOrder
    prices?: SortOrder
    experience?: SortOrder
    careerHighlight?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avgRating?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    avgRating?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    category?: SortOrder
    pricingUnit?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    nextAvailableDate?: SortOrder
    bookingType?: SortOrder
    experience?: SortOrder
    careerHighlight?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avgRating?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    category?: SortOrder
    pricingUnit?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    nextAvailableDate?: SortOrder
    bookingType?: SortOrder
    experience?: SortOrder
    careerHighlight?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avgRating?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    minPrice?: SortOrder
    avgRating?: SortOrder
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
    isSet?: boolean
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumPricingUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingUnit | EnumPricingUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPricingUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.PricingUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPricingUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumPricingUnitNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumBookingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingTypeFilter<$PrismaModel>
    _max?: NestedEnumBookingTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemNullableScalarRelationFilter = {
    is?: ItemWhereInput | null
    isNot?: ItemWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type SavedItemUserIdItemIdCompoundUniqueInput = {
    userId: string
    itemId: string
  }

  export type SavedItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
    isSet?: boolean
  }

  export type EnumBookingRequestNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingRequest | EnumBookingRequestFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingRequestNullableFilter<$PrismaModel> | $Enums.BookingRequest | null
    isSet?: boolean
  }

  export type EnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
    isSet?: boolean
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    request?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookedBy?: SortOrder
    vendorId?: SortOrder
    itemId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    request?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookedBy?: SortOrder
    vendorId?: SortOrder
    itemId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    request?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookedBy?: SortOrder
    vendorId?: SortOrder
    itemId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type EnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumBookingRequestNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingRequest | EnumBookingRequestFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingRequestNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingRequest | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingRequestNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingRequestNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    paidAmount?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SavedItemCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput> | SavedItemCreateWithoutUserInput[] | SavedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutUserInput | SavedItemCreateOrConnectWithoutUserInput[]
    createMany?: SavedItemCreateManyUserInputEnvelope
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SavedItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput> | SavedItemCreateWithoutUserInput[] | SavedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutUserInput | SavedItemCreateOrConnectWithoutUserInput[]
    createMany?: SavedItemCreateManyUserInputEnvelope
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SavedItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput> | SavedItemCreateWithoutUserInput[] | SavedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutUserInput | SavedItemCreateOrConnectWithoutUserInput[]
    upsert?: SavedItemUpsertWithWhereUniqueWithoutUserInput | SavedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedItemCreateManyUserInputEnvelope
    set?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    disconnect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    delete?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    update?: SavedItemUpdateWithWhereUniqueWithoutUserInput | SavedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedItemUpdateManyWithWhereWithoutUserInput | SavedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
  }

  export type VendorUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SavedItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput> | SavedItemCreateWithoutUserInput[] | SavedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutUserInput | SavedItemCreateOrConnectWithoutUserInput[]
    upsert?: SavedItemUpsertWithWhereUniqueWithoutUserInput | SavedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedItemCreateManyUserInputEnvelope
    set?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    disconnect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    delete?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    update?: SavedItemUpdateWithWhereUniqueWithoutUserInput | SavedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedItemUpdateManyWithWhereWithoutUserInput | SavedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
  }

  export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutVendorInput = {
    create?: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput> | ItemCreateWithoutVendorInput[] | ItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutVendorInput | ItemCreateOrConnectWithoutVendorInput[]
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutVendorInput = {
    create?: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput> | BookingCreateWithoutVendorInput[] | BookingUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVendorInput | BookingCreateOrConnectWithoutVendorInput[]
    createMany?: BookingCreateManyVendorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput> | ItemCreateWithoutVendorInput[] | ItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutVendorInput | ItemCreateOrConnectWithoutVendorInput[]
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput> | BookingCreateWithoutVendorInput[] | BookingUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVendorInput | BookingCreateOrConnectWithoutVendorInput[]
    createMany?: BookingCreateManyVendorInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type ReviewUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput> | ItemCreateWithoutVendorInput[] | ItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutVendorInput | ItemCreateOrConnectWithoutVendorInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutVendorInput | ItemUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ItemCreateManyVendorInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutVendorInput | ItemUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutVendorInput | ItemUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutVendorNestedInput = {
    create?: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput> | BookingCreateWithoutVendorInput[] | BookingUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVendorInput | BookingCreateOrConnectWithoutVendorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVendorInput | BookingUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: BookingCreateManyVendorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVendorInput | BookingUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVendorInput | BookingUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput> | ItemCreateWithoutVendorInput[] | ItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutVendorInput | ItemCreateOrConnectWithoutVendorInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutVendorInput | ItemUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ItemCreateManyVendorInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutVendorInput | ItemUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutVendorInput | ItemUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput> | BookingCreateWithoutVendorInput[] | BookingUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVendorInput | BookingCreateOrConnectWithoutVendorInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVendorInput | BookingUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: BookingCreateManyVendorInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVendorInput | BookingUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVendorInput | BookingUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ItemCreateimagesInput = {
    set: string[]
  }

  export type ItemCreatelocationsInput = {
    set: string[]
  }

  export type ItemCreatetermsInput = {
    set: string[]
  }

  export type ItemCreateoffersInput = {
    set: string[]
  }

  export type ItemCreatepricesInput = {
    set: string[]
  }

  export type SavedItemCreateNestedManyWithoutItemInput = {
    create?: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput> | SavedItemCreateWithoutItemInput[] | SavedItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutItemInput | SavedItemCreateOrConnectWithoutItemInput[]
    createMany?: SavedItemCreateManyItemInputEnvelope
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutItemsInput = {
    create?: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemsInput
    connect?: VendorWhereUniqueInput
  }

  export type CategoryTypeCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoryTypeCreateWithoutItemsInput, CategoryTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryTypeCreateOrConnectWithoutItemsInput
    connect?: CategoryTypeWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutItemInput = {
    create?: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput> | ReviewCreateWithoutItemInput[] | ReviewUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutItemInput | ReviewCreateOrConnectWithoutItemInput[]
    createMany?: ReviewCreateManyItemInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutItemInput = {
    create?: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput> | BookingCreateWithoutItemInput[] | BookingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutItemInput | BookingCreateOrConnectWithoutItemInput[]
    createMany?: BookingCreateManyItemInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SavedItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput> | SavedItemCreateWithoutItemInput[] | SavedItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutItemInput | SavedItemCreateOrConnectWithoutItemInput[]
    createMany?: SavedItemCreateManyItemInputEnvelope
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput> | ReviewCreateWithoutItemInput[] | ReviewUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutItemInput | ReviewCreateOrConnectWithoutItemInput[]
    createMany?: ReviewCreateManyItemInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput> | BookingCreateWithoutItemInput[] | BookingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutItemInput | BookingCreateOrConnectWithoutItemInput[]
    createMany?: BookingCreateManyItemInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type NullableEnumPricingUnitFieldUpdateOperationsInput = {
    set?: $Enums.PricingUnit | null
    unset?: boolean
  }

  export type ItemUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ItemUpdatelocationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ItemUpdatetermsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumBookingTypeFieldUpdateOperationsInput = {
    set?: $Enums.BookingType
  }

  export type ItemUpdateoffersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ItemUpdatepricesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavedItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput> | SavedItemCreateWithoutItemInput[] | SavedItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutItemInput | SavedItemCreateOrConnectWithoutItemInput[]
    upsert?: SavedItemUpsertWithWhereUniqueWithoutItemInput | SavedItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: SavedItemCreateManyItemInputEnvelope
    set?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    disconnect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    delete?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    update?: SavedItemUpdateWithWhereUniqueWithoutItemInput | SavedItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: SavedItemUpdateManyWithWhereWithoutItemInput | SavedItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
  }

  export type VendorUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemsInput
    upsert?: VendorUpsertWithoutItemsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutItemsInput, VendorUpdateWithoutItemsInput>, VendorUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryTypeUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CategoryTypeCreateWithoutItemsInput, CategoryTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryTypeCreateOrConnectWithoutItemsInput
    upsert?: CategoryTypeUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: CategoryTypeWhereInput | boolean
    connect?: CategoryTypeWhereUniqueInput
    update?: XOR<XOR<CategoryTypeUpdateToOneWithWhereWithoutItemsInput, CategoryTypeUpdateWithoutItemsInput>, CategoryTypeUncheckedUpdateWithoutItemsInput>
  }

  export type ReviewUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput> | ReviewCreateWithoutItemInput[] | ReviewUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutItemInput | ReviewCreateOrConnectWithoutItemInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutItemInput | ReviewUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReviewCreateManyItemInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutItemInput | ReviewUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutItemInput | ReviewUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutItemNestedInput = {
    create?: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput> | BookingCreateWithoutItemInput[] | BookingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutItemInput | BookingCreateOrConnectWithoutItemInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutItemInput | BookingUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BookingCreateManyItemInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutItemInput | BookingUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutItemInput | BookingUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SavedItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput> | SavedItemCreateWithoutItemInput[] | SavedItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SavedItemCreateOrConnectWithoutItemInput | SavedItemCreateOrConnectWithoutItemInput[]
    upsert?: SavedItemUpsertWithWhereUniqueWithoutItemInput | SavedItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: SavedItemCreateManyItemInputEnvelope
    set?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    disconnect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    delete?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    connect?: SavedItemWhereUniqueInput | SavedItemWhereUniqueInput[]
    update?: SavedItemUpdateWithWhereUniqueWithoutItemInput | SavedItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: SavedItemUpdateManyWithWhereWithoutItemInput | SavedItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput> | ReviewCreateWithoutItemInput[] | ReviewUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutItemInput | ReviewCreateOrConnectWithoutItemInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutItemInput | ReviewUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReviewCreateManyItemInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutItemInput | ReviewUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutItemInput | ReviewUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput> | BookingCreateWithoutItemInput[] | BookingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutItemInput | BookingCreateOrConnectWithoutItemInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutItemInput | BookingUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BookingCreateManyItemInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutItemInput | BookingUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutItemInput | BookingUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutCategoryTypeInput = {
    create?: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput> | ItemCreateWithoutCategoryTypeInput[] | ItemUncheckedCreateWithoutCategoryTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryTypeInput | ItemCreateOrConnectWithoutCategoryTypeInput[]
    createMany?: ItemCreateManyCategoryTypeInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCategoryTypeInput = {
    create?: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput> | ItemCreateWithoutCategoryTypeInput[] | ItemUncheckedCreateWithoutCategoryTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryTypeInput | ItemCreateOrConnectWithoutCategoryTypeInput[]
    createMany?: ItemCreateManyCategoryTypeInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutCategoryTypeNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput> | ItemCreateWithoutCategoryTypeInput[] | ItemUncheckedCreateWithoutCategoryTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryTypeInput | ItemCreateOrConnectWithoutCategoryTypeInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryTypeInput | ItemUpsertWithWhereUniqueWithoutCategoryTypeInput[]
    createMany?: ItemCreateManyCategoryTypeInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryTypeInput | ItemUpdateWithWhereUniqueWithoutCategoryTypeInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryTypeInput | ItemUpdateManyWithWhereWithoutCategoryTypeInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCategoryTypeNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput> | ItemCreateWithoutCategoryTypeInput[] | ItemUncheckedCreateWithoutCategoryTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryTypeInput | ItemCreateOrConnectWithoutCategoryTypeInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryTypeInput | ItemUpsertWithWhereUniqueWithoutCategoryTypeInput[]
    createMany?: ItemCreateManyCategoryTypeInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryTypeInput | ItemUpdateWithWhereUniqueWithoutCategoryTypeInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryTypeInput | ItemUpdateManyWithWhereWithoutCategoryTypeInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ItemCreateWithoutReviewsInput, ItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutReviewsInput
    connect?: ItemWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutReviewsInput
    connect?: VendorWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ItemUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ItemCreateWithoutReviewsInput, ItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutReviewsInput
    upsert?: ItemUpsertWithoutReviewsInput
    disconnect?: boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutReviewsInput, ItemUpdateWithoutReviewsInput>, ItemUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutReviewsInput
    upsert?: VendorUpsertWithoutReviewsInput
    disconnect?: boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutReviewsInput, VendorUpdateWithoutReviewsInput>, VendorUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutSavedItemsInput = {
    create?: XOR<UserCreateWithoutSavedItemsInput, UserUncheckedCreateWithoutSavedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutSavedByInput = {
    create?: XOR<ItemCreateWithoutSavedByInput, ItemUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSavedByInput
    connect?: ItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedItemsNestedInput = {
    create?: XOR<UserCreateWithoutSavedItemsInput, UserUncheckedCreateWithoutSavedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedItemsInput
    upsert?: UserUpsertWithoutSavedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedItemsInput, UserUpdateWithoutSavedItemsInput>, UserUncheckedUpdateWithoutSavedItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<ItemCreateWithoutSavedByInput, ItemUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSavedByInput
    upsert?: ItemUpsertWithoutSavedByInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutSavedByInput, ItemUpdateWithoutSavedByInput>, ItemUncheckedUpdateWithoutSavedByInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VendorCreateWithoutBookingsInput, VendorUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutBookingsInput
    connect?: VendorWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ItemCreateWithoutBookingsInput, ItemUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBookingsInput
    connect?: ItemWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type NullableEnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus | null
    unset?: boolean
  }

  export type NullableEnumBookingRequestFieldUpdateOperationsInput = {
    set?: $Enums.BookingRequest | null
    unset?: boolean
  }

  export type NullableEnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type VendorUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<VendorCreateWithoutBookingsInput, VendorUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutBookingsInput
    upsert?: VendorUpsertWithoutBookingsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutBookingsInput, VendorUpdateWithoutBookingsInput>, VendorUncheckedUpdateWithoutBookingsInput>
  }

  export type ItemUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ItemCreateWithoutBookingsInput, ItemUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBookingsInput
    upsert?: ItemUpsertWithoutBookingsInput
    disconnect?: boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutBookingsInput, ItemUpdateWithoutBookingsInput>, ItemUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    disconnect?: boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
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
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumPricingUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingUnit | EnumPricingUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPricingUnitNullableFilter<$PrismaModel> | $Enums.PricingUnit | null
    isSet?: boolean
  }

  export type NestedEnumBookingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeFilter<$PrismaModel> | $Enums.BookingType
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
    isSet?: boolean
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumPricingUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingUnit | EnumPricingUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PricingUnit[] | ListEnumPricingUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPricingUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.PricingUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPricingUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumPricingUnitNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingTypeFilter<$PrismaModel>
    _max?: NestedEnumBookingTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
    isSet?: boolean
  }

  export type NestedEnumBookingRequestNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingRequest | EnumBookingRequestFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingRequestNullableFilter<$PrismaModel> | $Enums.BookingRequest | null
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
    isSet?: boolean
  }

  export type NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumBookingRequestNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingRequest | EnumBookingRequestFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingRequest[] | ListEnumBookingRequestFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingRequestNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingRequest | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingRequestNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingRequestNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutBookingsInput
    item?: ItemCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
    itemId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item?: ItemCreateNestedOneWithoutReviewsInput
    vendor?: VendorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId?: string | null
    vendorId?: string | null
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId?: string | null
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
  }

  export type SavedItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    item: ItemCreateNestedOneWithoutSavedByInput
  }

  export type SavedItemUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
  }

  export type SavedItemCreateOrConnectWithoutUserInput = {
    where: SavedItemWhereUniqueInput
    create: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput>
  }

  export type SavedItemCreateManyUserInputEnvelope = {
    data: SavedItemCreateManyUserInput | SavedItemCreateManyUserInput[]
  }

  export type VendorCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reviews?: ReviewCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    bookings?: BookingCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    address?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusNullableFilter<"Booking"> | $Enums.BookingStatus | null
    request?: EnumBookingRequestNullableFilter<"Booking"> | $Enums.BookingRequest | null
    totalPrice?: FloatFilter<"Booking"> | number
    paymentStatus?: EnumPaymentStatusNullableFilter<"Booking"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    bookedBy?: StringFilter<"Booking"> | string
    vendorId?: StringFilter<"Booking"> | string
    itemId?: StringNullableFilter<"Booking"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    comment?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: StringFilter<"Review"> | string
    itemId?: StringNullableFilter<"Review"> | string | null
    vendorId?: StringNullableFilter<"Review"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    paidAmount?: FloatFilter<"Payment"> | number
    debit?: FloatFilter<"Payment"> | number
    credit?: FloatFilter<"Payment"> | number
    reason?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringNullableFilter<"Payment"> | string | null
  }

  export type SavedItemUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedItemWhereUniqueInput
    update: XOR<SavedItemUpdateWithoutUserInput, SavedItemUncheckedUpdateWithoutUserInput>
    create: XOR<SavedItemCreateWithoutUserInput, SavedItemUncheckedCreateWithoutUserInput>
  }

  export type SavedItemUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedItemWhereUniqueInput
    data: XOR<SavedItemUpdateWithoutUserInput, SavedItemUncheckedUpdateWithoutUserInput>
  }

  export type SavedItemUpdateManyWithWhereWithoutUserInput = {
    where: SavedItemScalarWhereInput
    data: XOR<SavedItemUpdateManyMutationInput, SavedItemUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedItemScalarWhereInput = {
    AND?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
    OR?: SavedItemScalarWhereInput[]
    NOT?: SavedItemScalarWhereInput | SavedItemScalarWhereInput[]
    id?: StringFilter<"SavedItem"> | string
    userId?: StringFilter<"SavedItem"> | string
    itemId?: StringFilter<"SavedItem"> | string
    createdAt?: DateTimeFilter<"SavedItem"> | Date | string
  }

  export type VendorUpsertWithoutUserInput = {
    update: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateWithoutUserInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
    items?: ItemUpdateManyWithoutVendorNestedInput
    bookings?: BookingUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutUserInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
    items?: ItemUncheckedUpdateManyWithoutVendorNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutVendorProfileInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    savedItems?: SavedItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    savedItems?: SavedItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type ReviewCreateWithoutVendorInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    item?: ItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutVendorInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    itemId?: string | null
  }

  export type ReviewCreateOrConnectWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewCreateManyVendorInputEnvelope = {
    data: ReviewCreateManyVendorInput | ReviewCreateManyVendorInput[]
  }

  export type ItemCreateWithoutVendorInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    savedBy?: SavedItemCreateNestedManyWithoutItemInput
    categoryType?: CategoryTypeCreateNestedOneWithoutItemsInput
    reviews?: ReviewCreateNestedManyWithoutItemInput
    bookings?: BookingCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutVendorInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    categoryId?: string | null
    savedBy?: SavedItemUncheckedCreateNestedManyWithoutItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutItemInput
    bookings?: BookingUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutVendorInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput>
  }

  export type ItemCreateManyVendorInputEnvelope = {
    data: ItemCreateManyVendorInput | ItemCreateManyVendorInput[]
  }

  export type BookingCreateWithoutVendorInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    item?: ItemCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutVendorInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    itemId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutVendorInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput>
  }

  export type BookingCreateManyVendorInputEnvelope = {
    data: BookingCreateManyVendorInput | BookingCreateManyVendorInput[]
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVendorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVendorInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutVendorInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutVendorInput, ItemUncheckedUpdateWithoutVendorInput>
    create: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutVendorInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutVendorInput, ItemUncheckedUpdateWithoutVendorInput>
  }

  export type ItemUpdateManyWithWhereWithoutVendorInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutVendorInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    price?: FloatNullableFilter<"Item"> | number | null
    quantity?: IntNullableFilter<"Item"> | number | null
    minPrice?: FloatNullableFilter<"Item"> | number | null
    category?: EnumCategoryFilter<"Item"> | $Enums.Category
    pricingUnit?: EnumPricingUnitNullableFilter<"Item"> | $Enums.PricingUnit | null
    isAvailable?: BoolFilter<"Item"> | boolean
    status?: StringNullableFilter<"Item"> | string | null
    nextAvailableDate?: DateTimeNullableFilter<"Item"> | Date | string | null
    images?: StringNullableListFilter<"Item">
    locations?: StringNullableListFilter<"Item">
    terms?: StringNullableListFilter<"Item">
    bookingType?: EnumBookingTypeFilter<"Item"> | $Enums.BookingType
    offers?: StringNullableListFilter<"Item">
    prices?: StringNullableListFilter<"Item">
    experience?: StringNullableFilter<"Item"> | string | null
    careerHighlight?: StringNullableFilter<"Item"> | string | null
    education?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    avgRating?: FloatFilter<"Item"> | number
    vendorId?: StringFilter<"Item"> | string
    categoryId?: StringNullableFilter<"Item"> | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutVendorInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVendorInput, BookingUncheckedUpdateWithoutVendorInput>
    create: XOR<BookingCreateWithoutVendorInput, BookingUncheckedCreateWithoutVendorInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVendorInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVendorInput, BookingUncheckedUpdateWithoutVendorInput>
  }

  export type BookingUpdateManyWithWhereWithoutVendorInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVendorInput>
  }

  export type SavedItemCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedItemsInput
  }

  export type SavedItemUncheckedCreateWithoutItemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedItemCreateOrConnectWithoutItemInput = {
    where: SavedItemWhereUniqueInput
    create: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput>
  }

  export type SavedItemCreateManyItemInputEnvelope = {
    data: SavedItemCreateManyItemInput | SavedItemCreateManyItemInput[]
  }

  export type VendorCreateWithoutItemsInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVendorProfileInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
    bookings?: BookingCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutItemsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
  }

  export type CategoryTypeCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryTypeUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryTypeCreateOrConnectWithoutItemsInput = {
    where: CategoryTypeWhereUniqueInput
    create: XOR<CategoryTypeCreateWithoutItemsInput, CategoryTypeUncheckedCreateWithoutItemsInput>
  }

  export type ReviewCreateWithoutItemInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    vendor?: VendorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutItemInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    vendorId?: string | null
  }

  export type ReviewCreateOrConnectWithoutItemInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput>
  }

  export type ReviewCreateManyItemInputEnvelope = {
    data: ReviewCreateManyItemInput | ReviewCreateManyItemInput[]
  }

  export type BookingCreateWithoutItemInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vendor: VendorCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutItemInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    vendorId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutItemInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput>
  }

  export type BookingCreateManyItemInputEnvelope = {
    data: BookingCreateManyItemInput | BookingCreateManyItemInput[]
  }

  export type SavedItemUpsertWithWhereUniqueWithoutItemInput = {
    where: SavedItemWhereUniqueInput
    update: XOR<SavedItemUpdateWithoutItemInput, SavedItemUncheckedUpdateWithoutItemInput>
    create: XOR<SavedItemCreateWithoutItemInput, SavedItemUncheckedCreateWithoutItemInput>
  }

  export type SavedItemUpdateWithWhereUniqueWithoutItemInput = {
    where: SavedItemWhereUniqueInput
    data: XOR<SavedItemUpdateWithoutItemInput, SavedItemUncheckedUpdateWithoutItemInput>
  }

  export type SavedItemUpdateManyWithWhereWithoutItemInput = {
    where: SavedItemScalarWhereInput
    data: XOR<SavedItemUpdateManyMutationInput, SavedItemUncheckedUpdateManyWithoutItemInput>
  }

  export type VendorUpsertWithoutItemsInput = {
    update: XOR<VendorUpdateWithoutItemsInput, VendorUncheckedUpdateWithoutItemsInput>
    create: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutItemsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutItemsInput, VendorUncheckedUpdateWithoutItemsInput>
  }

  export type VendorUpdateWithoutItemsInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
    bookings?: BookingUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutItemsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type CategoryTypeUpsertWithoutItemsInput = {
    update: XOR<CategoryTypeUpdateWithoutItemsInput, CategoryTypeUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoryTypeCreateWithoutItemsInput, CategoryTypeUncheckedCreateWithoutItemsInput>
    where?: CategoryTypeWhereInput
  }

  export type CategoryTypeUpdateToOneWithWhereWithoutItemsInput = {
    where?: CategoryTypeWhereInput
    data: XOR<CategoryTypeUpdateWithoutItemsInput, CategoryTypeUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryTypeUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryTypeUncheckedUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutItemInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutItemInput, ReviewUncheckedUpdateWithoutItemInput>
    create: XOR<ReviewCreateWithoutItemInput, ReviewUncheckedCreateWithoutItemInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutItemInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutItemInput, ReviewUncheckedUpdateWithoutItemInput>
  }

  export type ReviewUpdateManyWithWhereWithoutItemInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutItemInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutItemInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutItemInput, BookingUncheckedUpdateWithoutItemInput>
    create: XOR<BookingCreateWithoutItemInput, BookingUncheckedCreateWithoutItemInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutItemInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutItemInput, BookingUncheckedUpdateWithoutItemInput>
  }

  export type BookingUpdateManyWithWhereWithoutItemInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutCategoryTypeInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    savedBy?: SavedItemCreateNestedManyWithoutItemInput
    vendor: VendorCreateNestedOneWithoutItemsInput
    reviews?: ReviewCreateNestedManyWithoutItemInput
    bookings?: BookingCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCategoryTypeInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    savedBy?: SavedItemUncheckedCreateNestedManyWithoutItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutItemInput
    bookings?: BookingUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCategoryTypeInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput>
  }

  export type ItemCreateManyCategoryTypeInputEnvelope = {
    data: ItemCreateManyCategoryTypeInput | ItemCreateManyCategoryTypeInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutCategoryTypeInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCategoryTypeInput, ItemUncheckedUpdateWithoutCategoryTypeInput>
    create: XOR<ItemCreateWithoutCategoryTypeInput, ItemUncheckedCreateWithoutCategoryTypeInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCategoryTypeInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCategoryTypeInput, ItemUncheckedUpdateWithoutCategoryTypeInput>
  }

  export type ItemUpdateManyWithWhereWithoutCategoryTypeInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCategoryTypeInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    savedItems?: SavedItemCreateNestedManyWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    savedItems?: SavedItemUncheckedCreateNestedManyWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ItemCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    savedBy?: SavedItemCreateNestedManyWithoutItemInput
    vendor: VendorCreateNestedOneWithoutItemsInput
    categoryType?: CategoryTypeCreateNestedOneWithoutItemsInput
    bookings?: BookingCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    categoryId?: string | null
    savedBy?: SavedItemUncheckedCreateNestedManyWithoutItemInput
    bookings?: BookingUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutReviewsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutReviewsInput, ItemUncheckedCreateWithoutReviewsInput>
  }

  export type VendorCreateWithoutReviewsInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVendorProfileInput
    items?: ItemCreateNestedManyWithoutVendorInput
    bookings?: BookingCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutReviewsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUncheckedUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ItemUpsertWithoutReviewsInput = {
    update: XOR<ItemUpdateWithoutReviewsInput, ItemUncheckedUpdateWithoutReviewsInput>
    create: XOR<ItemCreateWithoutReviewsInput, ItemUncheckedCreateWithoutReviewsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutReviewsInput, ItemUncheckedUpdateWithoutReviewsInput>
  }

  export type ItemUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    savedBy?: SavedItemUpdateManyWithoutItemNestedInput
    vendor?: VendorUpdateOneRequiredWithoutItemsNestedInput
    categoryType?: CategoryTypeUpdateOneWithoutItemsNestedInput
    bookings?: BookingUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    savedBy?: SavedItemUncheckedUpdateManyWithoutItemNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type VendorUpsertWithoutReviewsInput = {
    update: XOR<VendorUpdateWithoutReviewsInput, VendorUncheckedUpdateWithoutReviewsInput>
    create: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutReviewsInput, VendorUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorUpdateWithoutReviewsInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    items?: ItemUpdateManyWithoutVendorNestedInput
    bookings?: BookingUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutReviewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutVendorNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutSavedItemsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedItemsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedItemsInput, UserUncheckedCreateWithoutSavedItemsInput>
  }

  export type ItemCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendor: VendorCreateNestedOneWithoutItemsInput
    categoryType?: CategoryTypeCreateNestedOneWithoutItemsInput
    reviews?: ReviewCreateNestedManyWithoutItemInput
    bookings?: BookingCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    categoryId?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutItemInput
    bookings?: BookingUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutSavedByInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSavedByInput, ItemUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedItemsInput = {
    update: XOR<UserUpdateWithoutSavedItemsInput, UserUncheckedUpdateWithoutSavedItemsInput>
    create: XOR<UserCreateWithoutSavedItemsInput, UserUncheckedCreateWithoutSavedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedItemsInput, UserUncheckedUpdateWithoutSavedItemsInput>
  }

  export type UserUpdateWithoutSavedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ItemUpsertWithoutSavedByInput = {
    update: XOR<ItemUpdateWithoutSavedByInput, ItemUncheckedUpdateWithoutSavedByInput>
    create: XOR<ItemCreateWithoutSavedByInput, ItemUncheckedCreateWithoutSavedByInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutSavedByInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutSavedByInput, ItemUncheckedUpdateWithoutSavedByInput>
  }

  export type ItemUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutItemsNestedInput
    categoryType?: CategoryTypeUpdateOneWithoutItemsNestedInput
    reviews?: ReviewUpdateManyWithoutItemNestedInput
    bookings?: BookingUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutItemNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    savedItems?: SavedItemCreateNestedManyWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    savedItems?: SavedItemUncheckedCreateNestedManyWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type VendorCreateWithoutBookingsInput = {
    id?: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutVendorProfileInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    companyName?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    verified?: boolean
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutBookingsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutBookingsInput, VendorUncheckedCreateWithoutBookingsInput>
  }

  export type ItemCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    savedBy?: SavedItemCreateNestedManyWithoutItemInput
    vendor: VendorCreateNestedOneWithoutItemsInput
    categoryType?: CategoryTypeCreateNestedOneWithoutItemsInput
    reviews?: ReviewCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
    categoryId?: string | null
    savedBy?: SavedItemUncheckedCreateNestedManyWithoutItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutBookingsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBookingsInput, ItemUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUncheckedUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VendorUpsertWithoutBookingsInput = {
    update: XOR<VendorUpdateWithoutBookingsInput, VendorUncheckedUpdateWithoutBookingsInput>
    create: XOR<VendorCreateWithoutBookingsInput, VendorUncheckedCreateWithoutBookingsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutBookingsInput, VendorUncheckedUpdateWithoutBookingsInput>
  }

  export type VendorUpdateWithoutBookingsInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
    items?: ItemUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutBookingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
    items?: ItemUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ItemUpsertWithoutBookingsInput = {
    update: XOR<ItemUpdateWithoutBookingsInput, ItemUncheckedUpdateWithoutBookingsInput>
    create: XOR<ItemCreateWithoutBookingsInput, ItemUncheckedCreateWithoutBookingsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutBookingsInput, ItemUncheckedUpdateWithoutBookingsInput>
  }

  export type ItemUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    savedBy?: SavedItemUpdateManyWithoutItemNestedInput
    vendor?: VendorUpdateOneRequiredWithoutItemsNestedInput
    categoryType?: CategoryTypeUpdateOneWithoutItemsNestedInput
    reviews?: ReviewUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    savedBy?: SavedItemUncheckedUpdateManyWithoutItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutItemNestedInput
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    savedItems?: SavedItemCreateNestedManyWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    profile?: string | null
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    verified?: boolean
    address?: string | null
    city?: string | null
    state?: string | null
    token?: string | null
    tokenExpires?: Date | string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    savedItems?: SavedItemUncheckedCreateNestedManyWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vendor: VendorCreateNestedOneWithoutBookingsInput
    item?: ItemCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    vendorId: string
    itemId?: string | null
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    savedItems?: SavedItemUncheckedUpdateManyWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutBookingsNestedInput
    item?: ItemUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
    itemId?: string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId?: string | null
    vendorId?: string | null
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    paidAmount: number
    debit: number
    credit: number
    reason: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId?: string | null
  }

  export type SavedItemCreateManyUserInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutBookingsNestedInput
    item?: ItemUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneWithoutReviewsNestedInput
    vendor?: VendorUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    paidAmount?: FloatFieldUpdateOperationsInput | number
    debit?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedItemUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedItemUncheckedUpdateWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedItemUncheckedUpdateManyWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyVendorInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    itemId?: string | null
  }

  export type ItemCreateManyVendorInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    categoryId?: string | null
  }

  export type BookingCreateManyVendorInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    itemId?: string | null
  }

  export type ReviewUpdateWithoutVendorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    item?: ItemUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutVendorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutVendorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUpdateWithoutVendorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    savedBy?: SavedItemUpdateManyWithoutItemNestedInput
    categoryType?: CategoryTypeUpdateOneWithoutItemsNestedInput
    reviews?: ReviewUpdateManyWithoutItemNestedInput
    bookings?: BookingUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutVendorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    savedBy?: SavedItemUncheckedUpdateManyWithoutItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutItemNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutVendorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutVendorInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    item?: ItemUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutVendorInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutVendorInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedItemCreateManyItemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyItemInput = {
    id?: string
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: string
    vendorId?: string | null
  }

  export type BookingCreateManyItemInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    address?: string | null
    status?: $Enums.BookingStatus | null
    request?: $Enums.BookingRequest | null
    totalPrice: number
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookedBy: string
    vendorId: string
  }

  export type SavedItemUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedItemsNestedInput
  }

  export type SavedItemUncheckedUpdateWithoutItemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedItemUncheckedUpdateManyWithoutItemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutItemInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    vendor?: VendorUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutItemInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutItemInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutItemInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutItemInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutItemInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    request?: NullableEnumBookingRequestFieldUpdateOperationsInput | $Enums.BookingRequest | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookedBy?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyCategoryTypeInput = {
    id?: string
    title: string
    description: string
    price?: number | null
    quantity?: number | null
    minPrice?: number | null
    category: $Enums.Category
    pricingUnit?: $Enums.PricingUnit | null
    isAvailable?: boolean
    status?: string | null
    nextAvailableDate?: Date | string | null
    images?: ItemCreateimagesInput | string[]
    locations?: ItemCreatelocationsInput | string[]
    terms?: ItemCreatetermsInput | string[]
    bookingType: $Enums.BookingType
    offers?: ItemCreateoffersInput | string[]
    prices?: ItemCreatepricesInput | string[]
    experience?: string | null
    careerHighlight?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    avgRating?: number
    vendorId: string
  }

  export type ItemUpdateWithoutCategoryTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    savedBy?: SavedItemUpdateManyWithoutItemNestedInput
    vendor?: VendorUpdateOneRequiredWithoutItemsNestedInput
    reviews?: ReviewUpdateManyWithoutItemNestedInput
    bookings?: BookingUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCategoryTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedItemUncheckedUpdateManyWithoutItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutItemNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCategoryTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    pricingUnit?: NullableEnumPricingUnitFieldUpdateOperationsInput | $Enums.PricingUnit | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    nextAvailableDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: ItemUpdateimagesInput | string[]
    locations?: ItemUpdatelocationsInput | string[]
    terms?: ItemUpdatetermsInput | string[]
    bookingType?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    offers?: ItemUpdateoffersInput | string[]
    prices?: ItemUpdatepricesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    careerHighlight?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
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