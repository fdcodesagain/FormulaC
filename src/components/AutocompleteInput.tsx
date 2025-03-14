import React, { useState, useRef, useEffect } from "react";
import { Box, TextInput, Paper, Text, Group, Badge, Loader, ScrollArea, Menu } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useAutocompleteItems } from "../app/api";
import { useInputStore } from "@/store/store";
import { AutocompleteItem } from "@/types/types";
import { ChevronDown } from "lucide-react";

export function AutocompleteInput() {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tokens = useInputStore((state) => state.tokens);
  const addTextToken = useInputStore((state) => state.addTextToken);
  const addPillToken = useInputStore((state) => state.addPillToken);
  const removeLastToken = useInputStore((state) => state.removeLastToken);
  const removeTokenAtIndex = useInputStore((state) => state.removeTokenAtIndex);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useClickOutside(() => setShowDropdown(false));

  const { data: suggestions = [], isLoading } = useAutocompleteItems(searchQuery);

  useEffect(() => {
    setSelectedIndex(0);
  }, [suggestions]);

  useEffect(() => {
    if (suggestions.length > 0 && searchQuery.length > 0) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [suggestions, searchQuery]);

  useEffect(() => {
    if (inputRef.current && document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  }, [tokens]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[a-zA-Z]/.test(value)) {
      setSearchQuery(value);
    } else {
      setInputValue(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue === "" && tokens.length > 0) {
      e.preventDefault();
      removeLastToken();
      return;
    }

    if (e.key === ",") {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        addTextToken(inputValue + ",");
        setInputValue("");
      }
      return;
    }

    if (showDropdown && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % suggestions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        handleItemSelect(suggestions[selectedIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setShowDropdown(false);
        setSearchQuery("");
      }
    } else if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      commitCurrentInput();
    }
  };

  const commitCurrentInput = () => {
    if (inputValue.trim() !== "") {
      addTextToken(inputValue);
      setInputValue("");
    }
  };

  const handleItemSelect = (item: AutocompleteItem) => {
    if (inputValue.trim() !== "") {
      addTextToken(inputValue + " ");
    }

    addPillToken(item);

    setInputValue("");
    setSearchQuery("");
    setShowDropdown(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemoveToken = (index: number) => {
    removeTokenAtIndex(index);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Box pos="relative" w="100%" maw={500} mx="auto">
      <Box p="0.25rem .5rem" style={{ border: "1px solid #e0e0e0", borderRadius: "var(--mantine-radius-md)", minHeight: "42px" }}>
        <Group gap={8} align="center" style={{ flexWrap: "wrap" }}>
          {tokens.map((token, index) => (
            <React.Fragment key={token.id}>
              {token.type === "pill" ? (
                <Menu position="bottom" withinPortal>
                  <Menu.Target>
                    <Badge size="lg" radius={"md"} rightSection={<ChevronDown size={16} />} variant="filled" style={{ cursor: "pointer" }}>
                      {token.value}
                    </Badge>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item color="red" leftSection={<IconTrash size={14} />} onClick={() => handleRemoveToken(index)}>
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              ) : (
                <Text size="md" style={{ wordBreak: "break-word" }}>
                  {token.value}
                </Text>
              )}
            </React.Fragment>
          ))}
          <TextInput
            size="md"
            ref={inputRef}
            placeholder="Type a letter to search..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              setTimeout(() => {
                if (!showDropdown) {
                  commitCurrentInput();
                }
              }, 200);
            }}
            variant="unstyled"
            style={{ flex: 1, minWidth: "120px" }}
            rightSection={isLoading && <Loader size="xs" />}
          />
        </Group>
      </Box>
      {showDropdown && (
        <ScrollArea h={500} ref={dropdownRef}>
          <Paper shadow="md" p="xs" mt={4} withBorder={suggestions.length > 0}>
            {suggestions.map((item, index) => (
              <Box className={index === selectedIndex ? "suggestedItemx" : "suggestedItem"} key={`suggestion-${item.id}`} p="xs" onClick={() => handleItemSelect(item)} style={{ cursor: "pointer" }}>
                <Text size="sm">{item.name}</Text>
                <Text size="xs" c="dimmed">
                  {item.category} - Value: {item.value}
                </Text>
              </Box>
            ))}
          </Paper>
        </ScrollArea>
      )}
    </Box>
  );
}
