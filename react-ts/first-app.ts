// Union Type (Combination of more than 1 data type)
let username: string | number;
username = "Deepanshu";
username = 13;

// Object Type
let newObj: object;
newObj = {
  name: "Deepanshu",
};

let moreAdvanceObject: { name: string; phone: string | number };
moreAdvanceObject = { name: "Deepanshu Mehra", phone: "+91890752152" };

// Array Types
let programmingLanguages: Array<string>;
programmingLanguages = ["Javascript", "Python", "Golang", "Ruby"];

let usersList: Array<{ name: string; email: string }>;
usersList = [
  { name: "Deepanshu Mehra", email: "deepanshumehra2102@gmail.com" },
];

// Parameter and return types
function Sum(a: number, b: number): number | void {
  return a + b;
}

function Callback(a: number, fn: (a: number) => void): void {
  fn(a);
}

// Type Aliases
type UserDetail = {
  name: string;
  email: string;
  phone: string | number;
};
type AddFn = (userInfo: UserDetail) => void;

function Callback2(fn: AddFn) {
  const user: UserDetail = {
    email: "Deepanshu@email.com",
    phone: "8920752152",
    name: "Deepanshu Name",
  };
  fn(user);
}

// We use interface more becuase interface give us the privilege to implemenet class busying "implements" keyword.
// We can also redeclare interface using same name
interface Credentials {
  email: string;
  password: string;
}

interface Credentials {
  id: number;
}

class Authentication implements Credentials {
  email: string;
  password: string;
  id: number;
  //   Add additional attributes as you want
  session: string;
}

// Merging Types
type UserRole = {
  role: string;
};

type UserPermission = {
  permissions: string[];
};

type AppAdmin = UserRole & UserPermission;
let adminUser: AppAdmin = {
  permissions: ["admin", "superAdmin"],
  role: "admin",
};

// we can use interface also to merge types
interface AppAdmin2 extends UserRole, UserPermission {}
let adminUser2: AppAdmin2 = {
  permissions: ["admin", "superAdmin"],
  role: "superAdmin",
};

// Literal types and Enum
let role: "admin" | "user" | "editor";
role = "editor";

enum Roles {
  ADMIN = "admin",
  USER = "user",
  EDITOR = "editor",
}

let role2: Roles;
role2 = Roles.ADMIN;

// check for the existence of the "permissions" property in object
function login(u: UserRole | UserPermission) {
  if ("permissions" in u) {
    // do something
  }
}

// Generics Type
type myList<T> = {
  list: T[];
  add: (item: T) => void;
  exists: (item: T) => boolean;
};

const newList: myList<number> = {
  list: [4, 2, 1],
  add(item) {},
  exists(item) {
    return true;
  },
};
