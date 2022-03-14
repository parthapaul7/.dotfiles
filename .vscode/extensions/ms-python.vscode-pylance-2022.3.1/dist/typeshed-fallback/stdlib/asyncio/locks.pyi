import sys
from collections import deque
from types import TracebackType
from typing import Any, Callable, Generator, TypeVar
from typing_extensions import Literal

from .events import AbstractEventLoop
from .futures import Future

if sys.version_info >= (3, 7):
    __all__ = ("Lock", "Event", "Condition", "Semaphore", "BoundedSemaphore")
else:
    __all__ = ["Lock", "Event", "Condition", "Semaphore", "BoundedSemaphore"]

_T = TypeVar("_T")

if sys.version_info >= (3, 9):
    class _ContextManagerMixin:
        async def __aenter__(self) -> None: ...
        async def __aexit__(
            self, exc_type: type[BaseException] | None, exc: BaseException | None, tb: TracebackType | None
        ) -> None: ...

else:
    class _ContextManager:
        def __init__(self, lock: Lock | Semaphore) -> None: ...
        def __enter__(self) -> None: ...
        def __exit__(self, *args: Any) -> None: ...

    class _ContextManagerMixin:
        # Apparently this exists to *prohibit* use as a context manager.
        # def __enter__(self) -> NoReturn: ... see: https://github.com/python/typing/issues/1043
        # def __exit__(self, *args: Any) -> None: ...
        def __iter__(self) -> Generator[Any, None, _ContextManager]: ...
        def __await__(self) -> Generator[Any, None, _ContextManager]: ...
        async def __aenter__(self) -> None: ...
        async def __aexit__(
            self, exc_type: type[BaseException] | None, exc: BaseException | None, tb: TracebackType | None
        ) -> None: ...

class Lock(_ContextManagerMixin):
    def __init__(self, *, loop: AbstractEventLoop | None = ...) -> None: ...
    def locked(self) -> bool: ...
    async def acquire(self) -> Literal[True]: ...
    def release(self) -> None: ...

class Event:
    def __init__(self, *, loop: AbstractEventLoop | None = ...) -> None: ...
    def is_set(self) -> bool: ...
    def set(self) -> None: ...
    def clear(self) -> None: ...
    async def wait(self) -> Literal[True]: ...

class Condition(_ContextManagerMixin):
    def __init__(self, lock: Lock | None = ..., *, loop: AbstractEventLoop | None = ...) -> None: ...
    def locked(self) -> bool: ...
    async def acquire(self) -> Literal[True]: ...
    def release(self) -> None: ...
    async def wait(self) -> Literal[True]: ...
    async def wait_for(self, predicate: Callable[[], _T]) -> _T: ...
    def notify(self, n: int = ...) -> None: ...
    def notify_all(self) -> None: ...

class Semaphore(_ContextManagerMixin):
    _value: int
    _waiters: deque[Future[Any]]
    def __init__(self, value: int = ..., *, loop: AbstractEventLoop | None = ...) -> None: ...
    def locked(self) -> bool: ...
    async def acquire(self) -> Literal[True]: ...
    def release(self) -> None: ...
    def _wake_up_next(self) -> None: ...

class BoundedSemaphore(Semaphore):
    def __init__(self, value: int = ..., *, loop: AbstractEventLoop | None = ...) -> None: ...
