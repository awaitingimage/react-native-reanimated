#pragma once

#include <react/renderer/core/ShadowNode.h>
#include <memory>
#include <unordered_map>
#include <utility>

using namespace facebook::react;

namespace reanimated {

class NewestShadowNodesRegistry {
 public:
  std::lock_guard<std::mutex> createLock();

  void set(ShadowNode::Shared shadowNode, Tag parentTag);
  // updates ShadowNode and sets parent tag, to be called from Reanimated

  bool has(const ShadowNode::Shared &shadowNode) const;
  // checks if ShadowNode exists in the registry

  ShadowNode::Shared get(const ShadowNode::Shared &shadowNode) const;
  // returns the most recent version of ShadowNode or the argument if not found

  void update(ShadowNode::Shared shadowNode);
  // updates ShadowNode that already exists in registry, to be called from RN

  void remove(Tag tag);
  // removes ShadowNode from map along with its ancestors

  void clear();
  // clears the map, called from NativeReanimatedModule destructor on app reload

  ShadowNode::Unshared cloneWithNewProps(
      const ShadowNode &oldShadowNode,
      const PropsParserContext &propsParserContext,
      RawProps &&rawProps);
  // returns a clone of newest ShadowNode with new props

 private:
  std::unordered_map<Tag, std::pair<ShadowNode::Shared, Tag>> map_;
  // tag -> (most recent shadow node, parent tag)
  mutable std::mutex mutex_; // Protects `map_`.
};

} // namespace reanimated
